from flask_sqlalchemy import SQLAlchemy
import pymysql
from flask import Flask


runapp = Flask(__name__)

#uri统一资源匹配符
#SQLALCHEMY_DATABASE_URI配置数据库连接的参数
# 格式为app.config['SQLALCHEMY_DATABASE_URI'] =  'mysql+pymysql://数据库用户:密码@127.0.0.1/数据库名称' 
runapp.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:zhaohang@127.0.0.1/bless_db'
 
#请求结束后自动提交数据库修改
runapp.config['SQLALCHEMY_COMMMIT_ON_TEARDOWN'] = True
#如果设置成 True (默认情况)，Flask-SQLAlchemy	将会追踪对象的修改并且发送信号。这需要额外的内存， 如果不必要的可以禁用它。
runapp.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
 
db = SQLAlchemy(runapp)  #关联sqlalchemy和flask



from app import urls