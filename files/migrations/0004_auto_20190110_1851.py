# Generated by Django 2.0.7 on 2019-01-10 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0003_auto_20190110_1842'),
    ]

    operations = [
        migrations.AlterField(
            model_name='files_cr',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='files/documents-CR/', verbose_name='Fichier - PDF'),
        ),
    ]
