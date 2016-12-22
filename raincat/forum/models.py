from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    tagline = models.CharField(max_length=120)

class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    author = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
