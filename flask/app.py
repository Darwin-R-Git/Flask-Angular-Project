from flask import Flask
from flask_restful import Resource , Api ,reqparse
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
mongodb_client = PyMongo(app, uri="mongodb://WilsonRiccardo:Ricky2004!@cluster0-shard-00-00.mwou4.mongodb.net:27017,cluster0-shard-00-01.mwou4.mongodb.net:27017,cluster0-shard-00-02.mwou4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-kkdpdd-shard-0&authSource=admin&retryWrites=true&w=majority"
)
db = mongodb_client.Prova1
CORS(app)
api = Api(app)



#parser = reqparse.RequestParser()
#parser.add_argument('name')
#parser.add_argument('informatica ', type=int)
#parser.add_argument('matematica ', type=int)
#parser.add_argument('arte', type=int)

#users = {}

@app.route("/add_one")
def add_one():
    db.Prova1.insert_one({'title': "todo title", 'body': "todo body"})
    return flask.jsonify(message="success")

@app.route("/userFind/<username>")
def user_profile(user):
    user = mongo.Prova1.Prova1.find_one_or_404({"user":user})
    return jsonify(user)
    
@app.route("/uploads/<path:filename>", methods=["POST"])
def save_upload(filename):
    mongo.save_file(filename, request.files["file"])
    return 





#-------------------------------------------------------------------------------------------------------------------Prova




class Hi(Resource):
    def get(self):
        return "hello ciao" 
    def post(self,user_id):
        args = parser.parse_args()
        new_user = {'name' : args['name'],
        'informatica' : args['informatica'],
        'matematica' : args['matematica'],
        'arte' : args['arte'],
        }
        users[user_id] = new_user
        return {user_id : users[user_id]}, 201
api.add_resource(Hi, '/users2')

if __name__ == '__main__':
    app.run()