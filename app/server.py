#----------------------------------------------------------------------------#
# Imports.
#----------------------------------------------------------------------------#
from flask import *
import yaml
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
# App Constants
#
#------

APP_PATH = './app/'
DATA_PATH =  '_data/'

SOURCES_PATH = DATA_PATH + 'sources.yml'


## actions to run on load

SOURCES = yaml.load(file(SOURCES_PATH, 'r'))



#------
#
# App Route Constructor
#
#------

#----------------------------------------------------------------------------#
# Controllers.
#----------------------------------------------------------------------------

#main app is loaded here
@app.route('/')
def index():
  return render_template('pages/main.html')

@app.route('/api/sources/', methods=['GET'])
def sources():
  return json.jsonify(
    sources=SOURCES
  )

@app.route('/api/sources/<key>', methods=['GET'])
def source(key):
  for source in SOURCES:
    if source['key'] == key:
      return json.jsonify(
        source
      )
  return 500

@app.route('/components/', methods=['GET'])
def components():
  return render_template('pages/components.html')



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
