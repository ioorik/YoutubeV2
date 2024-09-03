from os import getcwd
from bottle import Bottle, static_file

app = Bottle(False)

@app.route("/")
def home():
    html: str = open(getcwd() + "/JS/v2/home.html", "r").read()
    return html

@app.route("/Images/<file>")
def mask(file):
    return static_file(file, root="JS/v2/Images/")

app.run()