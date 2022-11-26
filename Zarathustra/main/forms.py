from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django import forms
from .models import Question,Response
class RegisterUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        widgets = {
            'email': forms.EmailInput(attrs={
                'required': True,
                'placeholder': 'joe@example.com',
                'autofocus': True
            }),
            'username': forms.TextInput(attrs={
                'placeholder': 'joe',
            })
        }
    def __init__(self, *args, **kwargs):
        super(RegisterUserForm, self).__init__(*args, **kwargs)
        self.fields['password1'].widget.attrs = {'placeholder': 'password'}
        self.fields['password2'].widget.attrs = {'placeholder': 'confirm password'}

class LoginForm(AuthenticationForm):
    class Meta:
        fields = '__all__'


class NewQuestionForm(forms.ModelForm):
    class Meta:
        model=Question
        fields=['title','body']
        widgets = {
            'title': forms.TextInput(attrs={
                'required': True,
                'placeholder': 'what is error 404?',
                'autofocus': True
            }),
        }

class ResponseForm(forms.ModelForm):
    class Meta:
        model=Response
        fields=['body']
        widgets = {
            'body': forms.TextInput(attrs={
                'placeholder': 'Your Answer'
            })  }
