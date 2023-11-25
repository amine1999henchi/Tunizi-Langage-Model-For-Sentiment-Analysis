from flask_sqlalchemy import SQLAlchemy
from __init__ import db,ma






class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text,nullable=False)
    company = db.Column(db.String(345), nullable=False)
    
    
    def __init__(self, username,password,company):
        self.username = username
        self.company=company
        self.password = password
        
    @property
    def serialize(self):
       """Return object data in easily serializable format"""
       return {
           'id'         : self.id,
            'user_name' : self.username,
            'password' :self.password,
            'company' : self.company
       }
        

        
        
        
        

class Comment(db.Model):
       __tablename__ = "Comments"
       id = db.Column('comment_id', db.Integer, primary_key = True)
       content = db.Column(db.String(400))
       
       
       def __init__(self, content):
        self.content = content
        
        
        
       @property
       def serialize(self):
        """Return object data in easily serializable format"""
        return {
                 'id'         : self.id,
                'content' : self.content,
                
        }
        

class Product(db.Model):
        __tablename__ = "products"
        id=db.Column('product_id', db.Integer, primary_key = True)
        name=db.Column(db.String(30))
        desc = db.Column(db.String(500))
        file =db.Column(db.String(200))
        
        
        
        def __init__(self, name,desc,file):
            self.name = name
            self.desc=desc
            self.file= file
            
            
        @property
        def serialize(self):
         """Return object data in easily serializable format"""
         return {
                 'id'         : self.id,
                'name' : self.name,
                'desc' :self.desc,
                "file" :self.file
        }