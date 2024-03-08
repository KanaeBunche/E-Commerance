from models import db, User,Favorites,Cart 
from flask_migrate import Migrate
from flask import Flask, request, make_response,jsonify
from flask_restful import Api, Resource,reqparse
from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_cors import CORS


app = Flask(__name__)

# Configure CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Configure database
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE_URI = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Initialize Flask-RESTful API
api = Api(app)

db.init_app(app)
api = Api(app)
migrate = Migrate(app, db)



class Newuser(Resource):
    def post(self):
        data = request.get_json()

        if 'username' not in data or 'password' not in data:
            return make_response(jsonify({"error": "Username and password are required"}), 400)

        new_user = User()

        try:
            # Check if the username already exists
            existing_user = User.query.filter_by(username=data['username']).first()
            if existing_user:
                return make_response(jsonify({"error": "Username already exists"}), 400)

            new_user.username = data['username']
            new_user.password = generate_password_hash(data['password'])

            # Assuming firstName and lastName are required fields
            if 'firstName' not in data or 'lastName' not in data:
                return make_response(jsonify({"error": "First name and last name are required"}), 400)

            new_user.first_name = data['firstName']
            new_user.last_name = data['lastName']

            # Add new user
            db.session.add(new_user)
            db.session.commit()

            return make_response(jsonify(new_user.to_dict()), 201)
        except Exception as error:
            db.session.rollback()
            return make_response(jsonify({"error": "An error occurred while registering the user"}), 500)


class UserLogin(Resource):
    def post(self):
        data = request.get_json()

        try:
            
            username = data.get('username')
            password = data.get('password')

            # Check if the username exists
            user = User.query.filter_by(username=username, password=password).first()
            if user:
                # user ID in the response
                response_data = {
                    "message": "Login successful",
                    "user_id": user.id
                }
                return make_response(jsonify(response_data), 200)
            else:
                return make_response(jsonify({"error": "Wrong username or password"}), 401)

        except Exception as error:
            new_error = {"error": str(error)}
            return make_response(jsonify(new_error), 400)
        

class Userget(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if user:
            # Corrected to use `user` variable and excluded password for security
            User_data = {
                "id": user.id,
                "username": user.username,
                # "password": user.password, # Excluded for security
            }
            return make_response(jsonify(User_data), 200)
        else:
            return make_response(jsonify({"message": "User not found"}), 404)

        

api.add_resource(UserLogin, '/userlogin')
api.add_resource(Userget, '/users/<int:user_id>')
api.add_resource(Newuser, '/newuser')

if __name__ == '__main__':
    app.run(port=5555, debug=True)