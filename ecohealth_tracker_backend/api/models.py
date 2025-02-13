from django.db import models
from django.contrib.auth.models import User



#Activity: To store different types of activities that contribute to the user's footprint.
#UserActivity: To track the user's activities and their associated carbon emissions.
#Footprint: To store the overall footprint of the user.
#Profile: To store additional user information.
#HealthTip: To provide health tips to users.
#Notification: To manage notifications sent to users.
#Device: To manage different devices that might be used for tracking.


class Sensor(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Measurement(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    temperature = models.FloatField()
    humidity = models.FloatField()
    air_quality = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sensor.name} - {self.timestamp}"

class Alert(models.Model):
    measurement = models.ForeignKey(Measurement, on_delete=models.CASCADE)
    alert_type = models.CharField(max_length=50)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.alert_type} - {self.measurement.sensor.name}"
    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username


class HealthTip(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return f"Notification for {self.user.username}"


class Device(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    device_type = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Activity(models.Model):
    name = models.CharField(max_length=100)
    carbon_emission = models.FloatField(help_text="Carbon emission in kg CO2e per unit")

    def __str__(self):
        return self.name


class UserActivity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    quantity = models.FloatField(help_text="Quantity of the activity")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.activity.name} - {self.date}"


class Footprint(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_emission = models.FloatField(help_text="Total carbon emission in kg CO2e")
    calculated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.total_emission} kg CO2e"