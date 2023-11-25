from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt

from flask_jwt_extended import JWTManager
# init SQLAlchemy so we can use it later in our models
db = SQLAlchemy()
ma = Marshmallow()
cors = CORS()
db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'csv'}
SECRET_KEY='hamza1234'

def create_app():
    app = Flask(__name__)
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    app.config['SECRET_KEY'] = 'hamza1234'
    app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///PCD.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    
    
    
    ma.init_app(app)
    cors.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # blueprint for auth routes in our app
    from auth.auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from comment.Comment import comment as Comment_blueprint
    app.register_blueprint(Comment_blueprint)
    
    from product.Product import product as Product_blueprint
    app.register_blueprint(Product_blueprint)

    return app