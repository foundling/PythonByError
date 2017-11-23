# Python Environment

You need two tools 

1. The Python REPL 
2. The Python virtual machine

Read this page and all of its subpages and stop, if you want, at 'Learning Python'.

Here is how to get Python.

+ [ What is Python? ](https://wiki.python.org/moin/BeginnersGuide/Overview)
+ [ Install Instructions ](https://wiki.python.org/moin/BeginnersGuide/Download)


Here are some steps I'm not going to worry about before we get started:

+ Deciding upon a text editor.

# Fail First

Pull up the REPL. The REPL is the Python interpreter where you type in programs incrementally.

Let's try to mess this thing up and type whatever we want. Don't let your brain get in the way. I'll wait ... 

Did it give you an error? What did it give you? 

This is what I typed and what I got:

    >>> nh
    Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    NameError: name 'nh' is not defined

I don't think about New Hampshire too often so that surprises me, but the important thing is the kind of frighteningly blocky *report* of some misdoing.  This is called an error.

It's a NameError. What is a NameError, and why is it capitalized and jammed together?

Let's do it again, we'll obviously get the same error ...

    >>> 04jk
      File "<stdin>", line 1
        04jk
           ^
    SyntaxError: invalid syntax

We've gotten a different error.  Something is invalid with our 'syntax'. A name error with `nh`, and now syntax error with `04jk`. 

Okay, another one ...

[ In the spirit of realism I tried very hard to produce a new error and hit a long streak of 'invalid syntax' errors ... ]

So like I said, one last time ...

    >>> 'lo.;pcsxdf 8i9
      File "<stdin>", line 1
        'lo.;pcsxdf 8i9
          ^
    SyntaxError: EOL while scanning string literal

A new error! Same type, but this time a 'literal' was scanned and something went bad.  Like it was Chinatown.


-- One more. But this time we pretend we are hackers ...

    >>> answer = '123' << 0 + 'leet'
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: unsupported operand type(s) for +: 'int' and 'str'


That's 4/4 things done wrong. Congratulate yourself. We've learned something:

<h1>Making errors is fun</h1> 

I'll give you some hints for the next chapter:

+ `NameError`s involve missteps regarding how you're identifying things in your program.  Programming is pretty flexible in that you, the programmer, get to name a lot of things.

<h1>Questions</h1>

+ Do you perceive a distinction between the 'invalid syntax' and 'EOL while scanning string literal' errors?
+ A 'literal' is surrounded by quotes and is nothing like a name. Can you guess at the difference?


