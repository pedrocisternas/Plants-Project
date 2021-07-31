"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Plant
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/user', methods=['POST', 'PUT'])
def user():
    request_body = request.get_json()
    # if request.method == "GET":
    #     user = User.query.filter_by(username=request_body["username"], password=request_body["password"]).first()
    #     if user is None:
    #         return jsonify("user not found"), 404
    #     else:
    #         user = user.serialize()
    #         return jsonify(user), 200
    if request.method == "POST":
        new_user = User(username=request_body["username"], email=request_body["email"], password=request_body["password"], first_name=request_body["first_name"], last_name=request_body["last_name"])
        # Add grid_width=request_body["grid_length"], grid_length=request_body["grid_length"] ?
        db.session.add(new_user)
        db.session.commit() 
        new_user = new_user.serialize()
        return jsonify(new_user), 200
    elif request.method == "PUT":
        user = User.query.filter_by(username=request_body["username"]).first()
        if user is None:
            return jsonify("user not found"), 404
        else:
            if (request_body["hardiness_zone"] and request_body["zipcode"] and request_body["experience"]) in request_body:
                user.grid_width = request_body["grid_width"]
                user.grid_length = request_body["grid_length"]
                user.hardiness_zone = request_body["hardiness_zone"]
                user.zipcode = request_body["zipcode"]
                user.experience = request_body["experience"]
                user = user.serialize()
                db.session.commit() 
                return jsonify(user), 200
            else:
                user.grid_width = request_body["grid_width"]
                user.grid_length = request_body["grid_length"]
                user = user.serialize()
                db.session.commit() 
                return jsonify(user), 200

@api.route('/plant', methods=['POST', 'GET', 'DELETE'])
def plant():
    request_body = request.get_json()
    if request_body is None:
        raise APIException("Request data not found", 403)
    if request.method == "GET":
        plant = Plant.query.filter_by(user_id=request_body["user_id"], grid_location=request_body["grid_location"]).first()
        if plant is None:
            return jsonify("plant not found"), 404
        else:
            plant = plant.serialize()
            return jsonify(plant), 200
    elif request.method == "POST":
        new_plant = Plant(name=request_body["name"], user_id=request_body["user_id"], grid_location=request_body["grid_location"])
        db.session.add(new_plant)
        db.session.commit() 
        user_updated = User.query.filter_by(id=request_body["user_id"]).first()
        user_updated = user_updated.serialize()
        return jsonify(user_updated), 200
    elif request.method == "DELETE":
        desired_plant = Plant.query.filter_by(user_id=request_body["user_id"], grid_location=request_body["grid_location"]).first()
        if desired_plant is None:
            return jsonify("plant not found"), 404
        else:
            db.session.delete(desired_plant)
            db.session.commit()
            user_updated = User.query.filter_by(id=request_body["user_id"]).first()
            user_updated = user_updated.serialize()
            return jsonify(user_updated), 200

@api.route('/user/<username>', methods=['GET'])
def get_user(username):
    user = User.query.filter_by(username=username).first()
    print("59. user", user)
    if user is None:
        raise APIException("user not found", 404)
    else:
        user = user.serialize()
        return jsonify(user), 200

@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    print(users)
    if users is None or len(users) < 1:
        return jsonify("No users"), 404
    else:
        users_serialized = list(map(lambda user: user.serialize(), users)) 
        return jsonify(users_serialized), 200        