from flask import Flask, render_template, redirect, request, url_for, send_from_directory
from flask_caching import Cache

app = Flask(__name__)

# --- Flask-Caching Config ---
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# --- Redirect non-www to www for SEO ---
@app.before_request
def redirect_non_www():
    host = request.host
    if host.startswith("vijayrodrigues.com") and not host.startswith("www."):
        return redirect(request.url.replace("vijayrodrigues.com", "www.vijayrodrigues.com"), code=301)

# --- Main route ---
@app.route('/')
@cache.cached(timeout=60)  # cache this page for 60 seconds
def index():
    return render_template("index.html")

# --- robots.txt route ---
@app.route('/robots.txt')
def robots():
    return send_from_directory('static', 'robots.txt', mimetype='text/plain')


if __name__ == '__main__':
    app.run(debug=True)
