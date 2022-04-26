from flask import Flask
from flask_restful import Resource , Api 
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
api = Api(app)

class Hi(Resource):
    def get(self):
        return "hello ciao" 
api.add_resource(Hi, '/')

if __name__ == '__main__':
    app.run()