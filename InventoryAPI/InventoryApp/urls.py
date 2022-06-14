from django.urls import re_path, path
from InventoryAPI.settings import MEDIA_URL
from InventoryApp import views

from django.conf.urls.static import static
from django.conf import settings


urlpatterns=[
    re_path(r'^category[\/]$', views.categoryApi),
    re_path(r'^category/([0-9]+)$', views.categoryApi),
    re_path(r'^item[\/]*$', views.itemApi),
    re_path(r'^item/([0-9]+)$', views.itemApi)
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)