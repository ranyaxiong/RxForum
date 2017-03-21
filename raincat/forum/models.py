from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(models.Model):
    address = models.CharField(max_length=60)
    avatar = models.ImageField(upload='pic_folder/', default='pic_folder/None/no-avatar.jpg')


class User(AbstractUser):
    tagline = models.CharField(max_length=120)
    profile = models.OneToOneField(
            UserProfile,
            on_delete = models.CASCADE,
            null = True,
            )


class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    author = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    author = models.ForeignKey(User, related_name="my_comment", on_delete=models.CASCADE)
    content = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
