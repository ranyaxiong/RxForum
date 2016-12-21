from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    taglien = models.CharField(max_length=120)
# Create your models here.
