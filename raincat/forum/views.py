import json
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from forum.models import Post, User, Comment
from forum.serializers import PostSerializer, UserSerializer, CommentSerializer
from rest_framework import generics, status, views
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
#from rest_framework.authentication import SessionAuthentication, BasicAuthentication
#from rest_framework.permissions import IsAuthenticated

class CommentList(generics.ListCreateAPIView):
    print("here is comment view")
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    def perform_create(self, serializer):
        print('CommentList view: ' + self.request.user)
        serializer.save(author=self.request.user)
'''
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        author = request.data.get('author')
        author = User.objects.get(username=author)
        content = request.data.get('content')
        instance = Comment(author=author, content=content)
        instance.save()
        return Response(serializer.validated_data)
'''

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    def perform_create(self, serializer):
        print("This is request.user", self.request.user)
        print("This is request._request.user", self.request._request.user)
        serializer.save(author=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserList(generics.ListCreateAPIView):
#    authentication_classes = (BasicAuthentication, SessionAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request):

        #print(request.data, request.data['username'], request.data.get('username'), request.POST, request.POST.get('username'))
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            username = request.data.get('username')
            email = request.data.get('email')
            password = request.data.get('password')
            print(username, email, password)
            instance = User(username=username, email=email)
            instance.set_password(password)
            instance.save()
            return Response(serializer.validated_data)
        else:
            print("validate error")
            return Response({
                'status': 'Bad request',
                'message': 'Account could not be created with received data.'
                }, status=status.HTTP_400_BAD_REQUEST)


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(views.APIView):
#    permission_classes = (IsAuthenticated,)
    def post(self, request, format=None):
        #data = json.load(request.body)
        '''        body_unicode = request.body.decode('utf-8')
        data = json.loads(body_unicode)
        username = data.get('username', None)
        password = data.get('password', None)
        '''
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        account = authenticate(username=username, password=password)
        #print(account, account.password)
        print('The user is:', request.user)

        if account is not None:
            if account.is_active:
                print("before login:", request.user)
                login(request, account)
                print("after login:", request.user)

                serialized = UserSerializer(account)

                return Response(serialized.data)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'This account has been disabled',
                    }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'Username/password combination valid'
                }, status=status.HTTP_401_UNAUTHORIZED)
