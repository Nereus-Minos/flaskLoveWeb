from app import db

#存放数据模型
class BlessForm(db.Model): #继承BaseModel中的方法
    """
    祝福表
    """
    __tablename__ = 'blessform'                #设置数据表的名称
    id = db.Column(db.Integer, primary_key=True, index=True) #mysql创建的表必须包含一个主键，以上orm模型中，缺少主键，故创建失败
    name = db.Column(db.String(32))   #设置对应的字段
    bless = db.Column(db.String(100))   #设置对应的字段
 
#db.drop_all()    #删除所有数据表
db.create_all()  #创建所有数据表