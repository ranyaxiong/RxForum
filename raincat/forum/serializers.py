from rest_framework import serializers
from forum.models import Post, User, Comment


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    comments = serializers.PrimaryKeyRelatedField(
            many=True,
            queryset=Comment.objects.all(),
            default=''
            )
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'author', 'comments')


class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Post.objects.all(),
        default='')

    class Meta:
        model = User
        fields = ('id', 'username','posts','password', 'email')


class CommentSerializer(serializers.ModelSerializer):
    article = serializers.ReadOnlyField(source='post.title')

    class Meta:
        model = Comment
        fields = ('id', 'author', 'created_time', 'article')
