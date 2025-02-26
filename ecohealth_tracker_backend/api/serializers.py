from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Conversation, Message
#from .models import Note


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


#class NoteSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Note
 #       fields = ["id", "title", "content", "created_at", "author"]
 #       extra_kwargs = {"author": {"read_only": True}}




class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'role', 'content', 'timestamp']
        read_only_fields = ['id', 'timestamp']

class ConversationSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Conversation
        fields = ['id', 'session_id', 'created_at', 'updated_at', 'messages']
        read_only_fields = ['id', 'created_at', 'updated_at']

class ChatRequestSerializer(serializers.Serializer):
    message = serializers.CharField()
    session_id = serializers.CharField(required=False, allow_null=True)

class ChatResponseSerializer(serializers.Serializer):
    reply = serializers.CharField()
    session_id = serializers.CharField()
