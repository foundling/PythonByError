import os
import json
import yaml
from slugify import slugify 

basename = os.path.basename
abspath = os.path.abspath

def pprint(*args):
    for arg in args:
        print(json.dumps(arg, indent=2))

class Chapter():

    def __init__(self, name='', chapter_number=None, tutorial='', exercises='', url_segment=None):
        self.name = name
        self.tutorial = tutorial
        self.exercises = exercises
        self.chapter_number = chapter_number
        url_segment = slugify(self.name)

    def __repr__(self):
        return 'name: {}, number: {}: '.format(self.name, self.chapter_number)

class Book():

    def __init__(self, path):

        self.path = abspath(path)
        self.chapters = self._find_chapters(self.path)

    def chapter_list(self):
        return [chapter.name for chapter in self.chapters]

    def get_chapter(self, name=None, chapter_number=None):

        if name:
            for chapter in self.chapters:
                if chapter.name == name:
                    return chapter

        if chapter_number:
            return self.chapters[chapter_number]

        return None

    def _find_chapters(self, path):
        chapters = [
            Chapter(
                name='Toc',
                chapter_number=0,
                tutorial='abc',
                exercises=''
            )
        ]
        tree = [ node for node in os.walk(path) ]
        root, children = tree[0], tree[1:]
        for index, child in enumerate(children, 1):
            chapter_path = child[0]
            chapter_children = child[2]
            name = basename(chapter_path)[2:].replace('_',' ').title()
            tutorial = [f for f in chapter_children if f == 'content.md']
            exercises = [f for f in chapter_children if f == 'exercises.yaml']
            tutorial_content = open(os.path.join(chapter_path, tutorial[0])).read() if tutorial else ''
            exercises_content = yaml.load(open(os.path.join(chapter_path, exercises[0]))) if exercises else ''
            chapter = Chapter(
                name = name, 
                chapter_number = index,
                tutorial = tutorial_content, 
                exercises = exercises_content
            )
            chapters.append(chapter)

        return chapters
