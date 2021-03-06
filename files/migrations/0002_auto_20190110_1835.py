# Generated by Django 2.0.7 on 2019-01-10 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Files_CR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_name', models.CharField(max_length=100, verbose_name='Fichier - Nom')),
                ('file', models.FileField(blank=True, null=True, upload_to='files/documents/', verbose_name='Fichier - PDF')),
            ],
            options={
                'verbose_name': 'Documents',
                'verbose_name_plural': '1. Documents - CR et similaires',
            },
        ),
        migrations.AlterModelOptions(
            name='files_pseudostatic',
            options={'verbose_name': 'Documents', 'verbose_name_plural': '2. Documents - Autres'},
        ),
    ]
