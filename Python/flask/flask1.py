# https://dev.to/irfnhm/how-to-set-python3-as-a-default-python-version-on-mac-4jjf

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'