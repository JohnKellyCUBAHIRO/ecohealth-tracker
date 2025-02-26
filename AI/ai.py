#Data Collection:

#Collect user activity data and their associated carbon emissions.
#Data Preprocessing:
import pandas as pd

# Load data from the database
user_activities = UserActivity.objects.all().values()
df = pd.DataFrame(user_activities)

# Preprocess data
df['date'] = pd.to_datetime(df['date'])
df.set_index('date', inplace=True)
#Model Training:
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Prepare features and target variable
X = df[['quantity']]
y = df['carbon_emission']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a linear regression model
model = LinearRegression()
model.fit(X_train, y_train)
#Model Integration:
from django.http import JsonResponse
from .models import UserActivity

def predict_emission(request):
    quantity = float(request.GET.get('quantity'))
    prediction = model.predict([[quantity]])
    return JsonResponse({'predicted_emission': prediction[0]})

#Example: Anomaly Detection in Sensor Data
#Data Collection:

#Collect sensor data from the Measurement model.
#Data Preprocessing:

import pandas as pd

# Load data from the database
measurements = Measurement.objects.all().values()
df = pd.DataFrame(measurements)

# Preprocess data
df['timestamp'] = pd.to_datetime(df['timestamp'])
df.set_index('timestamp', inplace=True)

#Model Training:

from sklearn.ensemble import IsolationForest

# Prepare features
X = df[['temperature', 'humidity', 'air_quality']]

# Train an isolation forest model for anomaly detection
model = IsolationForest(contamination=0.01)
model.fit(X)

#Model Integration:
from django.http import JsonResponse
from .models import Measurement

def detect_anomaly(request):
    temperature = float(request.GET.get('temperature'))
    humidity = float(request.GET.get('humidity'))
    air_quality = float(request.GET.get('air_quality'))
    data = [[temperature, humidity, air_quality]]
    anomaly = model.predict(data)
    return JsonResponse({'anomaly': anomaly[0]})