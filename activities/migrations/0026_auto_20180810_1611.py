# Generated by Django 2.0.7 on 2018-08-10 16:11

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('activities', '0025_auto_20180810_1559'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='eventregistration',
            unique_together={('participant', 'event')},
        ),
    ]