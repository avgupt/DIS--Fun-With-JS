from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
  return render_template('index.html')

@app.route('/neuralArt')
def neural_art():
  return render_template('neuralArt.html')

@app.route('/colorSwitch')
def color_switch():
  return render_template('colorSwitch.html')

@app.route('/ETC')
def ETC():
  return render_template('ETC.html')
