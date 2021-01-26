from flask import render_template, jsonify,request
from app.models import BlessForm
from app import db


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


def bless_req():
    name = request.args.get('name')
    bless_txt =request.args.get('bless_txt')
    newobj = BlessForm(name=name, bless=bless_txt)
    db.session.add(newobj)
    db.session.commit()
    usersBless = BlessForm.query.all()
    print(usersBless)
    return jsonify({'name':name,'bless_txt':bless_txt})


def Comments():
    return render_template("Comments.html")


