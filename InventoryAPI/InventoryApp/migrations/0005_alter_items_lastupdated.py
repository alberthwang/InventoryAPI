# Generated by Django 4.0.4 on 2022-06-08 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('InventoryApp', '0004_alter_items_insertdate_alter_items_lastupdated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='LastUpdated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
