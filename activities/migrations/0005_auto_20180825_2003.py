# Generated by Django 2.0.7 on 2018-08-25 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activities', '0004_auto_20180825_1957'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity_animation',
            name='description',
            field=models.TextField(blank=True, verbose_name='Présentation générale'),
        ),
        migrations.AlterField(
            model_name='activity_animation_slot',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Présentation (spécifique à ce crénau)'),
        ),
        migrations.AlterField(
            model_name='activity_animation_slot',
            name='notes',
            field=models.TextField(blank=True, null=True, verbose_name='Notes particulières (spécifique à ce crénau)'),
        ),
        migrations.AlterField(
            model_name='activity_animation_type',
            name='animation_type',
            field=models.CharField(max_length=100, verbose_name="Type d'animation (ex: sports, activité artistique, ...)"),
        ),
        migrations.AlterField(
            model_name='activity_animation_type',
            name='description',
            field=models.TextField(null=True, verbose_name='Présentation générale'),
        ),
    ]
