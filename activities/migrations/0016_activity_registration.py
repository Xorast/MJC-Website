# Generated by Django 2.0.7 on 2018-10-22 16:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('activities', '0015_auto_20181008_1656'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity_Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity_slot', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='RegistrationList', to='activities.Activity_Animation_Slot')),
                ('participant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='RegistrationList', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Inscriptions',
                'verbose_name': 'Inscription',
            },
        ),
    ]
