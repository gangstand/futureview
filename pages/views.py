from django.shortcuts import redirect, render
from django.views.generic import TemplateView

from pages.forms import ArticlesForm, BooleanFieldFrom
from pages.models import Awards, Team, Project


def index(request):
    error = ''
    if request.method == 'POST':
        form = ArticlesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            error = 'Форма заполнена не верно'

    form = ArticlesForm()
    checkbox = BooleanFieldFrom()
    data = {
        'form': form,
        'error': error,
        'checkbox': checkbox
    }

    return render(request, 'pages/home.html', data)


class ProjectsPageView(TemplateView):
    model = Project
    template_name = "pages/projects.html"


class AboutPageView(TemplateView):
    model = Awards
    template_name = "pages/about.html"

    def get_context_data(self, **kwargs):
        context = super(AboutPageView, self).get_context_data(**kwargs)
        context['Team'] = Team.objects.all()
        return context


class ContactPageView(TemplateView):
    template_name = 'pages/contact.html'
