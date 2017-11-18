import os
import re
from flask import Flask, render_template, Markup
from flaskext.markdown import Markdown
from slugify import slugify
from models import book

app = Flask(__name__)
app.debug = True
Markdown(app)

python_book = book.Book(os.path.join(app.root_path, 'content','chapters'))
chapter_names = python_book.chapter_list()

@app.template_filter('slugify')
def slugify_filter(s):
    return slugify(s)

def unslugify(s):
    return s.replace('-',' ').title()

def next_prev_urls(name):
    chapter = python_book.get_chapter(name = unslugify(name))
    prev_chapter = python_book.get_prev_chapter(chapter)
    prev_url = slugify(prev_chapter.name) if prev_chapter else None
    next_chapter = python_book.get_next_chapter(chapter)
    next_url = slugify(next_chapter.name) if next_chapter else None
    return next_url, prev_url

@app.route('/')
def index():
    chapters = python_book.chapters
    chapter = chapters[0]
    return render_template('home.html', chapters=chapters, chapter=chapter, chapter_names=chapter_names)

@app.route('/chapters/<name>')
def chapter(name):
    print(unslugify(name))
    chapter = python_book.get_chapter(name = unslugify(name))
    return render_template('page.html', chapter=chapter, chapter_names=chapter_names)
