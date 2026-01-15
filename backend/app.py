from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)

class Exam(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    courseName = db.Column(db.String(100), nullable=False)
    examDate = db.Column(db.Date, nullable=False)
    examTime = db.Column(db.Time, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

with app.app_context():
    db.create_all()

@app.route('/register', methods=["POST"])
def register():
    data = request.get_json() or {}
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'All fields are required!'}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered!'}), 400
    
    new_user = User(
        username=username,
        email=email,
        password_hash=generate_password_hash(password)
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Registration successful!', 'username': new_user.username, 'user_id': new_user.id}), 201


@app.route('/login', methods=["POST"])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required!'}), 400
    
    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password_hash, password):
        return jsonify({'message': 'Login successful!', 'username': user.username, 'user_id': user.id}), 200
    
    return jsonify({'message': 'Invalid email or password!'}), 401

@app.route('/Addexam', methods=["POST"])
def add_exam():
    data = request.get_json() or {}
    courseName = data.get('courseName')
    examDateSTR = data.get('examDate')
    examTimeSTR = data.get('examTime')
    user_id = data.get('user_id')

    if not courseName or not examDateSTR or not examTimeSTR or not user_id:
        return jsonify({'message': 'All fields are required!'}), 400

    examDate = datetime.strptime(examDateSTR, '%Y-%m-%d').date()
    examTime = datetime.strptime(examTimeSTR, '%H:%M').time()  

    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found!'}), 404

    new_exam = Exam(
        courseName=courseName,
        examDate=examDate,
        examTime=examTime,
        user_id=user_id
    )

    db.session.add(new_exam)
    db.session.commit()

    return jsonify({'message': 'Exam added successfully!'}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)