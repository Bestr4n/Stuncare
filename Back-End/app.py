from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_KEY = "LSy2jarwh5GXRly7UzV2Q5jgOsGuNk2OBBQ0kdFhFqjo"

def get_access_token(API_KEY):
    token_response = requests.post(
        'https://iam.cloud.ibm.com/identity/token',
        data={"apikey": API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'}
    )
    return token_response.json()["access_token"]

def get_prediction(umur, jenis_kelamin, tinggi_badan):
    mltoken = get_access_token(API_KEY)
    header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + mltoken}
    payload_scoring = {
        "input_data": [
            {
                "fields": ['umur', 'jenis_kelamin', 'tinggi_badan'],
                "values": [[umur, jenis_kelamin, tinggi_badan]]
            }
        ]
    }
    response_scoring = requests.post(
        'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/488bf95b-f1e9-4966-b36f-fa39decc59b2/predictions?version=2021-05-01',
        json=payload_scoring,
        headers=header
    )
    predictions = response_scoring.json()
    try:
        prediksi = predictions['predictions'][0]['values'][0][0]
        return prediksi
    except KeyError:
        return "Error: Unexpected response structure"
    except IndexError:
        return "Error: Missing prediction values"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    umur = data['umur']
    jenis_kelamin = data['jenis_kelamin']
    tinggi_badan = data['tinggi_badan']
    prediction = get_prediction(umur, jenis_kelamin, tinggi_badan)
    return jsonify({'prediction': prediction})

if __name__ == "__main__":
    app.run(debug=True)
