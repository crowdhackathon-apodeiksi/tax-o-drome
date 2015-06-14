from django.conf.urls import patterns, include, url
from rest_framework import routers
from . import views

from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'badge', views.BadgeViewSet)
router.register(r'consumer', views.ConsumerViewSet)
router.register(r'receipt', views.ReceiptViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'business', views.BusinessViewSet)

urlpatterns = patterns(
    '',
    url(r'^receipt/ocr/upload/$', views.UploadFileView.as_view()),
    url(r'^', include(router.urls))
)

format_suffix_patterns(urlpatterns)
