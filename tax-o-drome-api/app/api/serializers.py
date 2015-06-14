from rest_framework import serializers

from models import *


# Create your models here.
class ConsumerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Consumer


# Create your models here.
class ReceiptSerializer(serializers.ModelSerializer):
	id = serializers.CharField(read_only=True)

	class Meta:
		model = Receipt


# Create your models here.
class CategorySerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Category


# Create your models here.
class BusinessSerializer(serializers.ModelSerializer):
	class Meta:
		model = Business


# Create your models here.
class BadgeSerializer(serializers.ModelSerializer):

	class Meta:
		model = Badge