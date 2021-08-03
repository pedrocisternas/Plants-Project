from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    first_name = db.Column(db.String(20), unique=False, nullable=False)
    last_name = db.Column(db.String(20), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    plants = db.relationship('Plant', backref='user')
    grid_width = db.Column(db.Integer, unique=False, nullable=True)
    grid_length = db.Column(db.Integer, unique=False, nullable=True)
    zipcode = db.Column(db.String(20), unique=False, nullable=True)
    hardiness_zone = db.Column(db.String(20), unique=False, nullable=True)
    experience = db.Column(db.String(120), unique=False, nullable=True)

    def __repr__(self):
        return '<User %r,%r>' % (self.id, self.username)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "plants": [plant.serialize() for plant in self.plants ],
            "grid_width": self.grid_width,
            "grid_length": self.grid_length,
            "hardiness_zone": self.hardiness_zone,
            "zipcode": self.zipcode,
            "experience": self.experience
        }

class Plant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    grid_location = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<Plant %r,%r,%r,%r>' % (self.id, self.name, self.user_id, self.grid_location)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "username": self.user_id,
            "grid_location": self.grid_location
        }