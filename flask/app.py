from flask import Flask
from flask_restful import Resource , Api ,reqparse
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('name')
parser.add_argument('informatica ', type=int)
parser.add_argument('matematica ', type=int)
parser.add_argument('arte', type=int)

users = {

}

class Hi(Resource):
    def get(self):
        return "hello ciao" 
    def put(self,user_id):
        args = parser.parse_args()
        new_user = {'name' : args['name'],
        'informatica' : args['informatica'],
        'matematica' : args['matematica'],
        'arte' : args['arte'],
        }
        users[user_id] = new_user
        return {user_id : users[user_id]}, 201
api.add_resource(Hi, '/users')

if __name__ == '__main__':
    app.run()