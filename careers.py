import os
import webapp2
import jinja2

from google.appengine.api import users
import jinja2
template_env = jinja2.Environment(loader=jinja2.FileSystemLoader(os.getcwd()))
import logging
#Jinja Loader

template_env = jinja2.Environment(
loader=jinja2.FileSystemLoader(os.getcwd()))

class thisCareersHandler(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('templates/careers/careers.html')
        context = {}
        self.response.write(template.render(context))

    def post(self):
        template = template_env.get_template('templates/careers/careers.html')
        context = {}
        self.response.write(template.render(context))

class CareersHandler(webapp2.RequestHandler):
    def get(self):
        pass

    def post(self):
        pass

app = webapp2.WSGIApplication([
    ('/careers', thisCareersHandler),
    ('/careers/.*', CareersHandler)
], debug=True)
