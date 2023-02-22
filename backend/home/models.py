from django.conf import settings
from django.db import models
class Event(models.Model):
    'Generated Model'
    name = models.CharField(max_length=1024,)
    location = models.TextField()
