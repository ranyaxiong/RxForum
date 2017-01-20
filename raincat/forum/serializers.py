from rest_framework import serializers
from forum.models import Post, User, Comment


class CommentSerializer(serializers.ModelSerializer):
    article = serializers.ReadOnlyField(source='post.id')
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Comment
        fields = ('id', 'author', 'content', 'created_time', 'article')


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    comments = CommentSerializer(many=True)
#    comments = serializers.PrimaryKeyRelatedField(
#           many=True,
#           queryset=Comment.objects.all(),
#           default=''
#           )
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
