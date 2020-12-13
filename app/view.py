from flask import render_template


def index():
    return render_template("Index.htm")


def timeMan():
    return render_template("lovetree.htm")


def story():
    return render_template("story.htm")


def letter():
    return render_template("Letter.htm")

def youme():
    return render_template("youme.html")


def Comments():
    return render_template("Comments.html")


