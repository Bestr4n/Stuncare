import requests
import json

# Define the input fields
array_of_input_fields = ['umur', 'jenis_kelamin', 'tinggi_badan']

# Prompt the user for input values
umur = int(input("Masukkan umur: "))
jenis_kelamin = int(input("Masukkan jenis kelamin (0 untuk laki-laki, 1 untuk perempuan): "))
tinggi_badan = float(input("Masukkan tinggi badan: "))

# Create the list of values to be scored
array_of_values_to_be_scored = [umur, jenis_kelamin, tinggi_badan]

# NOTE: you must manually set API_KEY below using information retrieved from your IBM Cloud account
API_KEY = "LSy2jarwh5GXRly7UzV2Q5jgOsGuNk2OBBQ0kdFhFqjo"

# Get the access token
token_response = requests.post(
    'https://iam.cloud.ibm.com/identity/token', 
    data={"apikey": API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'}
)
mltoken = token_response.json()["access_token"]

# Define the headers for the scoring request
header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + mltoken}

# Create the payload for scoring
payload_scoring = {
    "input_data": [
        {
            "fields": array_of_input_fields,
            "values": [array_of_values_to_be_scored]
        }
    ]
}

# Make the scoring request
response_scoring = requests.post(
    'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/488bf95b-f1e9-4966-b36f-fa39decc59b2/predictions?version=2021-05-01', 
    json=payload_scoring, 
    headers={'Authorization': 'Bearer ' + mltoken}
)

# Print the scoring response
print("Scoring response")
predictions = response_scoring.json()

# Extract the prediction
try:
    prediksi = predictions['predictions'][0]['values'][0][0]
    if prediksi == 0:
        print(prediksi, "Severely Stunted")
    elif prediksi == 1:
        print(prediksi, "Stunted")
    elif prediksi == 2:
        print(prediksi, "Normal")
    elif prediksi == 3:
        print(prediksi, "Tinggi")
    else:
        print('Masukan Data Dengan Benar')
except KeyError:
    print("Error: Unexpected response structure")
    print(predictions)
except IndexError:
    print("Error: Missing prediction values")
    print(predictions)
