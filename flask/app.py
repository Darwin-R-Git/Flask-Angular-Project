from flask import Flask
from flask_restful import Resource , Api ,reqparse
from flask_cors import CORS
from flask_mongoengine import MongoEngine

app = Flask(__name__)
CORS(app)
api = Api(app)


app.config['MONGODB_SETTINGS'] = {
    'db': 'Prova1',
    'host': 'mongodb://WilsonRiccardo:Ricky2004!@cluster0-shard-00-00.mwou4.mongodb.net:27017,cluster0-shard-00-01.mwou4.mongodb.net:27017,cluster0-shard-00-02.mwou4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-kkdpdd-shard-0&authSource=admin&retryWrites=true&w=majority'
}
db = MongoEngine()
db.init_app(app)

class User(db.Document):
    name = db.StringField()
    informatica = db.StringField()
    matematica = db.StringField()
    arte = db.StringField()



#parser = reqparse.RequestParser()
#parser.add_argument('name')
#parser.add_argument('informatica ', type=int)
#parser.add_argument('matematica ', type=int)
#parser.add_argument('arte', type=int)

#users = {}




@app.route('/userFind', methods=['GET'])
def query_records():
    name = request.args.get('name')
    user = User.objects(name=name).first()
    if not user:
        return jsonify({'error': 'data not found'})
    else:
        return jsonify(user.to_json())

@app.route('/users1', methods=['PUT'])
def create_record():
    record = json.loads(request.data)
    user = User(name=record['name'],
                informatica=record['informatica'],
                matematica=record['matematica'],
                arte=record['arte'])
    user.save()
    return jsonify(user.to_json())




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