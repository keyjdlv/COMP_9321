import json
from functools import wraps
import pandas as pd
import numpy as np
import pymongo
from pymongo import MongoClient
from flask import Flask, request
from flask_restplus import Resource, Api
from flask_restplus import fields, abort
from flask_restplus import inputs

# Construct
app = Flask(__name__)
api = Api(app,
          default="Install Predict",  # Default namespace
          title="App Dataset",  # Documentation Title
          description="According to basic dataset, predict installs of App") # Documentation Description)
predict_model = api.model('App',
                          {'Category': fields.String},
                          {'Size': fields.Integer},
                          {'Price': fields.Float},
                          {'Content rating': fields.Float},
                          {'Genres': fields.String})
data_type = ['Category','Size', 'Price', 'Content rating','Genres']


@api.route('/predict')
class predict(Resource):
    @api.response(200, 'Successful')
    @api.response(400, 'Bad request')
    @api.doc(description="Receive data and give prediction")
    @api.expect(predict_model, validate = True)
    def get(self):
        # Justify if there is no data inside
        data = request.json
        for i in data_type:
            if not data[i]:
                return jsonify(data_type)


        # ML model function
        # result = ML_function()
        # return {'Result': result}


if __name__ == '__main__':
    app.run(debug = True)
