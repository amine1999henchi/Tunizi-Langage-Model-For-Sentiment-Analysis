from __init__ import ALLOWED_EXTENSIONS
import pickle
import json
import pandas as pd
from collections import Counter


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def calcul(filename):
    pickled_model = pickle.load(open('./IA/finalized_model.pkl', 'rb'))
    vectorizer = pickle.load(open("./IA/vectorizer.pkl", 'rb'))
    test=pd.read_csv("./uploads/{}".format(filename))
    
    


    pos = 0
    neg = 0
    for text in test["text"]:

        textinput1 = vectorizer.transform([text])

        svm_test = pickled_model.predict(textinput1)
        svm_test = svm_test-1
        if svm_test == 1:
            pos += 1
        else:
            neg += 1
    x = {
    "positive": pos,
    "neg": neg,
    "freq":Counter(" ".join(test["text"]).split()).most_common(70)
    }
    result = json.dumps(x)
    return(result)
