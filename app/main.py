from flask import Flask
from view import *

app = Flask(__name__)
app.add_url_rule(rule='/', endpoint='index', view_func=index)
app.add_url_rule(rule='/timeMan/', endpoint='timeMan', view_func=timeMan)
app.add_url_rule(rule='/story/', endpoint='story', view_func=story)
app.add_url_rule(rule='/letter/', endpoint='letter', view_func=letter)
app.add_url_rule(rule='/youme/', endpoint='youme', view_func=youme)
app.add_url_rule(rule='/Comments/', endpoint='Comments', view_func=Comments)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=5000)