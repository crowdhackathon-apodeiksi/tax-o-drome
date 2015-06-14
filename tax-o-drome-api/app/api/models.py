from django.db import models

from djangotoolbox.fields import EmbeddedModelField


# Create your models here.
class Consumer(models.Model):
	name = models.CharField(max_length=255)

	points = models.IntegerField(default=0)



# Create your models here.
class Category(models.Model):
	name = models.CharField(max_length=64)
	desc = models.TextField()


# Create your models here.
class Business(models.Model):
	name = models.CharField(max_length=255)
	fullname = models.CharField(max_length=1024)
	tin = models.CharField(max_length=12, primary_key=True)
	activity = models.CharField(max_length=255)
	address = models.CharField(max_length=255)
	phone = models.CharField(max_length=14)
	doi_id = models.CharField(max_length=10)
	code_activity = models.CharField(max_length=255)

	def __str__(self):
		return self.tin


# Create your models here.
class Badge(models.Model):
	name = models.CharField(max_length=64)
	category = models.CharField(max_length=64)
	desc = models.TextField()


# Create your models here.
class Receipt(models.Model):
	transaction_date = models.DateTimeField()

	total_amount = models.FloatField()
	total_vat = models.FloatField()

	user_hash = models.CharField(max_length=2048)

	longitude = models.FloatField(blank=True, null=True)
	latitude = models.FloatField(blank=True, null=True)

	business = models.ForeignKey(Business, related_name='receipts')
	rid = models.CharField(max_length=1024)