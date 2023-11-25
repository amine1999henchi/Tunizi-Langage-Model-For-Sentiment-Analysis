from flask import Blueprint
from __init__ import db
import pickle

from flask import Flask , request, jsonify, json, Response


from models import  Comment

comment = Blueprint('Comment', __name__)

pickled_model = pickle.load(open('IA/finalized_model.pkl', 'rb'))
vectorizer=pickle.load(open("IA/vectorizer.pkl", 'rb'))


        



@comment.route('/comment/add' , methods=['POST'])
def add_comment():  
    comment_text = request.json.get("content")
    comment_to_add = Comment(content=comment_text)
    db.session.add(comment_to_add)
    db.session.commit()
    return jsonify(comment_to_add.serialize)

@comment.route('/comment/predict' , methods=['POST'])
def predict():  
    comment_text = request.json.get("content")
    textinput1 = vectorizer.transform([comment_text])
    svm_test=pickled_model.predict(textinput1)
    svm_test=svm_test-1
    predict =svm_test[0]
    if predict==1 :
        return ({"sentiment":"positive"})
    else :
        return ({"sentiment":"negative"})
    
    