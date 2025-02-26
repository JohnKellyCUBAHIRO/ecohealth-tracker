from django.urls import path
from . import views
from .views import ChatView, ConversationHistoryView

urlpatterns = [
    #path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    #path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path('chat/', ChatView.as_view(), name='chat'),
    path('conversations/<str:session_id>/', ConversationHistoryView.as_view(), name='conversation-history'),
]