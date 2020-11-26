from flask import Flask
from view import *

app = Flask(__name__)
app.add_url_rule(rule='/', endpoint='index', view_func=main)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=5000)