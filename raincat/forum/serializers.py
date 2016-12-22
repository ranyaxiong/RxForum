from rest_framework import serializers
from forum.models import Post, User


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'author')


class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Post.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username','posts')
