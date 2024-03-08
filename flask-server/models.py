from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    _password = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    carts = db.relationship('Cart', backref='user', lazy=True)
    favorites = db.relationship('Favorites', backref='user', lazy=True)

    serialize_rules = ('username', 'first_name', 'last_name')
   

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, plaintext_password):
        self._password = generate_password_hash(plaintext_password)

    def verify_password(self, password):
        return check_password_hash(self.password, password)

    @validates('username')
    def validate_username(self, key, username):
        if User.query.filter(User.username == username).first():
            raise ValueError("Username already exists!")
        return username

    @validates('first_name')
    def validate_first_name(self, key, first_name):
        if not first_name:
            raise ValueError("First name cannot be empty!")
        return first_name

    @validates('last_name')
    def validate_last_name(self, key, last_name):
        if not last_name:
            raise ValueError("Last name cannot be empty!")
        return last_name

    def __repr__(self):
        return '<User %r>' % self.username

class Favorites(db.Model, SerializerMixin):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(255), nullable=False)
    username = db.Column(db.String(80), db.ForeignKey('Users.username'), nullable=False)

    serialize_rules = ('image_url', 'username')

    def __repr__(self):
        return '<Favorites %r>' % self.image_url

class Cart(db.Model, SerializerMixin):
    __tablename__ = 'cart'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(255), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)

    serialize_rules = ('item_name', 'quantity', 'price', 'user_id')

    def __repr__(self):
        return '<Cart %r>' % self.item_name
