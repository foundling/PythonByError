Let's take a look at that `NameError` again. If you recall, I caused the following to appear 

    >>> nh
    Traceback (most recent call last):
        File "<stdin>", line 1, in <module>
    NameError: name 'nh' is not defined


when we were deviantly mashing our keyboards with the REPL running. And I'm glad. This Pythonic idea of a name is a fundamental concept we should think about before we rush eagerly to write that that full-stack Django tic-tac-toe app.

## Text

A Python program contains many levels of text. There is the literal text of the program that sits in a file on your hard-drive.  You may have written it yourself, you might have changed it over time with your text-editor. But once execute it as a Python program, by running `python myprogram.py` for example, that literal sequence of characters is transformed according to a specific set of formal rules into an active *process* running among many other active processes in your computer's operating system. What you have then is a different beast. The idea of literal 'text' is still relevant, but in a very different way. Consider the following code: 

    #!/usr/bin/env python

    ''' find user with id "t440" '''  

    users = get_active_users()

    found = False
    for user in users:
        if user[id] == 't440':
            return found
    return found

Here the only thing that is text, in the previously mentioned sense of a sequence of characters, is the user id, `'t440'`.  In computer science, we don't refer to objects like this as words or text, we call them `strings`. 

### String

A `string` is a sequence of characters enclosed in quotes.
