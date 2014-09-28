#----------------------------------------------------------------------------#
# Imports.
#----------------------------------------------------------------------------#
from flask import *
import logging
from logging import Formatter, FileHandler
import os
#----------------------------------------------------------------------------#
# App Config.
#----------------------------------------------------------------------------#

app = Flask(__name__, static_folder="assets")

app.config.from_object('config')


#------
#
# App Route Constructor
#
#------
#
#
#

def to_url(s):
  return ''.join(s.split(' ')).lower()

def make_route(params):
  def _route():
    print "constructing route {}".format(params)
    return render_template('pages/chart.html',
      title=params['title'],
      static=params['static'])

  _route.__name__ = to_url(params['title'])
  return route


#----------------------------------------------------------------------------#
# Controllers.
#----------------------------------------------------------------------------

@app.route('/')
def index():
    return render_template('pages/main.html')

@app.route('/wordCounts')
def wordCounts():
    return render_template('pages/chart.html',
      title="Word Counts",
      static="word_counts")

@app.route('/articleDates')
def articleDates():
    return render_template('pages/chart.html',
      title="Article Dates",
      static='article_dates')

@app.route('/pageNumbers')
def pageNumbers():
    return render_template('pages/chart.html',
      title="Article Location",
      static='page_num')

@app.route('/genders')
def genders():
    return render_template('pages/chart.html',
      title="Gender Mentions",
      static='first_gender')

@app.route('/housesofworship')
def houses_of_worship():
    return render_template('pages/chart.html',
      title="Houses of Worship",
      static='houses_of_worship')

@app.route('/parents')
def parents():
    return render_template('pages/chart.html',
      title="Daddy's Girls VS. Mommas's Boys",
      static='parents')

@app.route('/careers')
def careers():
    return render_template('pages/chart.html',
      title="Most Popular Careers",
      static='careers')

@app.route('/agemarried')
def age_married():
    return render_template('pages/chart.html',
      title="Age Married",
      static='agemarried')

@app.route('/firstnames')
def firstnames():
    return render_template('pages/chart.html',
      title="Most Common Names",
      static='firstnames')

@app.route('/rabbis')
def rabbis():
    return render_template('pages/chart.html',
      title="Most Popular Rabbis",
      static='rabbis')


@app.route('/schoolcounts')
def schoolcounts():
    return render_template('pages/chart.html',
      title="Relative Selectivity",
      static='school_counts')


# Error handlers.
@app.errorhandler(500)
def internal_error(error):
    return render_template('errors/500.html'), 500

@app.errorhandler(404)
def internal_error(error):
    return render_template('errors/404.html'), 404


#----------------------------------------------------------------------------#
# Launch.
#----------------------------------------------------------------------------#

# Default port:

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
