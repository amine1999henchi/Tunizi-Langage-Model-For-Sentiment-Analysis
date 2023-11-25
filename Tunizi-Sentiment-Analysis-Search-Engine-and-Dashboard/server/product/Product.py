
from flask import Blueprint, flash, request
from __init__ import db, UPLOAD_FOLDER
import os
from werkzeug.utils import secure_filename
from __init__ import ALLOWED_EXTENSIONS
import pickle
from product.utils import calcul


from flask import Flask, request, jsonify, json, Response

from models import User, Product, Comment
from __init__ import ALLOWED_EXTENSIONS


product = Blueprint('main', __name__)

pickled_model = pickle.load(open('IA/finalized_model.pkl', 'rb'))
vectorizer = pickle.load(open("IA/vectorizer.pkl", 'rb'))


def allowed_file(filename):
    return filename.split('.')[1].lower() in ALLOWED_EXTENSIONS


@product.route('/produit/get', methods=['GET'])
def get_users():
    products = Product.query.all()
    return jsonify([i.serialize for i in products])


@product.route('/produit/get/<id>', methods=['GET'])
def get_produit(id):
    produit_to_get = Product.query.get(id)
    return jsonify(produit_to_get.serialize)


@product.route('/produit/add', methods=['POST'])
def add_produit():

    product_name = request.form.get('name')
    product_desc = request.form.get('desc')
    file = request.files.get('file')

    filename = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    produit = Product(name=product_name, desc=product_desc, file=filename)
    db.session.add(produit)
    db.session.commit()
    
    return jsonify(produit.serialize)


@product.route("/produit/predict/<id>",methods=["GET"])
def prduit_predict(id):
    existing_product = Product.query.filter_by(id=id).first()
    filename=existing_product.file
    return calcul(filename)
    
    


@product.route('/produit/delete/<id>', methods=['DELETE'])
def delete_produit(id):
    produit_to_delete = Product.query.get(id)
    db.session.delete(produit_to_delete)
    db.session.commit()
    return "object deleted successfully !"
