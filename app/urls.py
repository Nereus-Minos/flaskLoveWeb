from app import runapp
from app.view import *

runapp.add_url_rule(rule='/', endpoint='index', view_func=index)
runapp.add_url_rule(rule='/timeMan/', endpoint='timeMan', view_func=timeMan)
runapp.add_url_rule(rule='/story/', endpoint='story', view_func=story)
runapp.add_url_rule(rule='/letter/', endpoint='letter', view_func=letter)
runapp.add_url_rule(rule='/youme/', endpoint='youme', view_func=youme)
runapp.add_url_rule(rule='/Comments/', endpoint='Comments', view_func=Comments)
runapp.add_url_rule(rule='/bless_req/', endpoint='bless_req', view_func=bless_req)

