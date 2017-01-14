from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    tagline = models.CharField(max_length=120)


class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    author = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)


class comment(models.Model):
    author = models.ForeignKey(User, related_name="my_comment", on_delete=models.CASCADE)
    content = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
