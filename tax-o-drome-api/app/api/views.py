from rest_framework import viewsets, decorators
from rest_framework.response import Response
from datetime import datetime

from serializers import *
from models import *

from django import forms

from PIL import Image

from rest_framework.views import APIView

import os
import pytesseract


 # Create your models here.
class ConsumerViewSet(viewsets.ModelViewSet):
	serializer_class = ConsumerSerializer
	queryset = Consumer.objects.all()


# Create your models here.
class ReceiptViewSet(viewsets.ModelViewSet):
	serializer_class = ReceiptSerializer
	queryset = Receipt.objects.all()


# Create your models here.
class CategoryViewSet(viewsets.ModelViewSet):
	serializer_class = CategorySerializer
	queryset = Category.objects.all()


# Create your models here.
class BusinessViewSet(viewsets.ModelViewSet):
	serializer_class = BusinessSerializer
	queryset = Business.objects.all()


# Create your models here.
class BadgeViewSet(viewsets.ModelViewSet):
	serializer_class = BadgeSerializer
	queryset = Badge.objects.all()


class UploadFileForm(forms.Form):
	user_hash = forms.CharField(max_length=2048)
	file = forms.FileField()


def handle_uploaded_file(user_hash, f):
	receipt_path = '/opt/tax-o-drome-api/uploads/' + user_hash
	if not os.path.exists(receipt_path):
            os.makedirs(receipt_path, 0755)

	with open(receipt_path + '/demo.png', 'wb+') as destination:
		for chunk in f.chunks():
			destination.write(chunk)

	return receipt_path + '/demo.png'


class UploadFileView(APIView):
	def get(self, request, format=None):
		return Response('')

	def post(self, request, format=None):
		form = UploadFileForm(request.POST, request.FILES)
		if form.is_valid():
			filename = handle_uploaded_file(request.data['user_hash'], request.FILES['file'])
			return Response(pytesseract.image_to_string(Image.open(filename), lang='grc'))
		return Response(form.errors)