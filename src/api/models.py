from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(20), unique=True, nullable=False)
    plants = db.relationship('Plant', backref='user')
    grid_size = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<User %r,%r>' % (self.id, self.username)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "plants": [plant.serialize() for plants in self.plants ]
            # do not serialize the password, its a security breach
        }

class Plant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.Integer, db.ForeignKey('user.id'))
    grid_location = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<Plant %r,%r>' % (self.id, self.name)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }