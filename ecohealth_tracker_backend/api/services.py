
import openai
from typing import List, Dict, Optional
from django.conf import settings
from .models import Conversation, Message
import os
from openai import OpenAI  
class OpenAIService:
    def __init__(self):
        #openai.api_key = os.environ.get("OPENAI_API_KEY"),  
        #model = os.environ.get("OPENAI_MODEL")
        
        self.client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    
    def get_response(self, messages: List[Dict[str, str]]) -> str:
        """Get a response from OpenAI API."""
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
                temperature=0.7,
                max_tokens=1000
            )
            return response.choices[0].message.content
        except Exception as e:
            
            print(f"OpenAI API error: {str(e)}")
            return "I'm sorry, I'm having trouble processing your request right now."

class ConversationService:
    def __init__(self):
        self.openai_service = OpenAIService()
    
    def get_or_create_conversation(self, session_id: Optional[str] = None) -> Conversation:
        """Get an existing conversation or create a new one."""
        if session_id:
            conversation, _ = Conversation.objects.get_or_create(session_id=session_id)
        else:
            
            import uuid
            new_session_id = str(uuid.uuid4())
            conversation = Conversation.objects.create(session_id=new_session_id)
        
        return conversation
    
    def add_message(self, conversation: Conversation, role: str, content: str) -> Message:
        """Add a message to the conversation."""
        return Message.objects.create(
            conversation=conversation,
            role=role,
            content=content
        )
    
    def get_conversation_messages(self, conversation: Conversation) -> List[Dict[str, str]]:
        """Get all messages in the conversation formatted for OpenAI."""
        messages = conversation.messages.all()
        return [{"role": msg.role, "content": msg.content} for msg in messages]
    
    def get_chat_response(self, user_message: str, session_id: Optional[str] = None) -> Dict[str, str]:
        """Process a user message and get a response."""
        
        conversation = self.get_or_create_conversation(session_id)
        
        
        if conversation.messages.count() == 0:
            self.add_message(
                conversation, 
                'system', 
                'You are a helpful assistant providing concise and accurate responses.'
            )
        
        
        self.add_message(conversation, 'user', user_message)
        
        
        message_history = self.get_conversation_messages(conversation)
        
        
        assistant_response = self.openai_service.get_response(message_history)
        
        
        self.add_message(conversation, 'assistant', assistant_response)
        
        
        return {
            'reply': assistant_response,
            'session_id': conversation.session_id
        }