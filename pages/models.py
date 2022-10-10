from django.db import models


class Articles(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField('Имя', max_length=50)
    full_name = models.CharField('Фамилия', max_length=50)
    course = models.CharField('Курс', max_length=1)
    description = models.TextField('Навыки')
    tel = models.CharField('Телефон', max_length=20)
    url_vk = models.URLField('Ссылкa vk', blank=True)
    gmail = models.CharField('Почта', max_length=100)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'


class Awards(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField('Название проекта', max_length=100)
    image = models.ImageField('Изображение', upload_to='project/images/')
    description = models.CharField('Описание', max_length=250)
    url = models.URLField('Ссылкa', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Награды'
        verbose_name_plural = 'Награда'


class Team(models.Model):
    id = models.AutoField(primary_key=True)
    team_title = models.CharField('Имя Фамилия', max_length=100)
    team_image = models.ImageField('Изображение', upload_to='project/images/')
    team_description = models.CharField('HardSkills', max_length=50)
    team_url_github = models.URLField('Ссылкa github', blank=True)
    team_url_telegram = models.URLField('Ссылкa telegram', blank=True)
    team_url_vk = models.URLField('Ссылкa vk', blank=True)

    def __str__(self):
        return self.team_title

    class Meta:
        verbose_name = 'Человека'
        verbose_name_plural = 'Команда'