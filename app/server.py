#----------------------------------------------------------------------------#
# Imports.
#----------------------------------------------------------------------------#
from flask import *
import yaml
import logging
from logging import Formatter, FileHandler
import os
from flask.ext.pymongo import PyMongo
from bson.json_util import dumps
#----------------------------------------------------------------------------#
# App Config.
#----------------------------------------------------------------------------#

app = Flask(__name__, static_folder="assets")
#mongo = PyMongo(app)
app.config.from_object('config')


#------
#
# App Constants
#
#------

APP_PATH = './app/'
DATA_PATH =  '_data/'

SOURCES_PATH = APP_PATH + DATA_PATH + 'sources.yml'

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
def get_sources(key):
  for source in SOURCES:
    if source['key'] == key:
      return json.jsonify(
        source
      )
  return 500

@app.route('/api/comments/<key>', methods=['GET'])
def get_comments(key):
  comments = dumps(mongo.db.comments.find({'key' : key}))
  return json.jsonify ({
    'comments': comments
  })

@app.route('/api/comments/<key>', methods=['POST'])
def ad_comment(key):
  req_json = request.get_json()
  author = req_json['author']

  text = req_json['text']
  item = {
    'key': key,
    'author' : author,
    'text' : text
  }
  id = mongo.db.comments.insert(item)
  comments = dumps(mongo.db.comments.find({'key' : key}))
  return json.jsonify ({
    'comments': comments
  })

# components list
@app.route('/components/', methods=['GET'])
def components():
  return render_template('pages/components.html')


### test route for building new vis
@app.route('/test')
def test():
  return render_template('pages/chart.html')

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
    app.run(host='0.0.0.0', port=port, debug=True)
