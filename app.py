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
chapters = python_book.chapters

@app.template_filter('slugify')
def slugify_filter(s):
    return slugify(s)

@app.template_filter('basename')
def basename_filter(path):
    return os.path.basename(path)

def unslugify(s):
    return s.replace('-',' ').title()

@app.route('/')
def index():
    return render_template('home.html', chapters=chapters, chapter=chapters[0], chapter_names=chapter_names)

@app.route('/chapters/toc')
def toc():
    return render_template('toc.html', chapters=chapters, chapter_names=chapter_names)

@app.route('/chapters/<name>')
def chapter(name):
    chapter = python_book.get_chapter(name = unslugify(name))
    return render_template('page.html', chapter=chapter, chapter_names=chapter_names)


files = ['/data/osu/290/project/content/chapters/./0_intro/content.md'
'/data/osu/290/project/content/chapters/./0_intro/exercises.md',
'/data/osu/290/project/content/chapters/./1_data_types/content.md',
'/data/osu/290/project/content/chapters/./1_data_types/exercises.md']

app.run(debug=True, host='0.0.0.0', extra_files = files)
