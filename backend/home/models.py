from django.conf import settings
from django.db import models
class Event(models.Model):
    'Generated Model'
    name = models.CharField(max_length=1024,)
    location = models.TextField()
class AttendEvent(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="attendevent_user",)
    event = models.ForeignKey("home.Event",on_delete=models.CASCADE,related_name="attendevent_event",)
    interest_level = models.IntegerField()
