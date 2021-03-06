from flask import Flask, render_template
import json 

def dummy():
    return [90, 10]
    # return [10, 90]


prediction = dummy()

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("test.html")


@app.route("/update", methods = ['POST'])
def getStatus():
    
    return json.dumps(prediction)

if __name__ == "__main__":
        app.run(debug = True)