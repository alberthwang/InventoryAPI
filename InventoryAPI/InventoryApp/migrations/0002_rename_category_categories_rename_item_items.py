# Generated by Django 4.0.4 on 2022-05-24 23:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('InventoryApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Category',
            new_name='Categories',
        ),
        migrations.RenameModel(
            old_name='Item',
            new_name='Items',
        ),
    ]
