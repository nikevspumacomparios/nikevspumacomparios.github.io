import os
from flask import Flask, render_template, send_from_directory, send_file

app = Flask(__name__, template_folder='.')
app.secret_key = os.environ.get("SESSION_SECRET", "soccer-cleats-comparison")

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/index.html')
def index_html():
    return send_file('index.html')

@app.route('/brands.html')
def brands_html():
    return send_file('brands.html')

@app.route('/products.html')
def products_html():
    return send_file('products.html')

@app.route('/refund.html')
def refund_html():
    return send_file('refund.html')

@app.route('/factors.html')
def factors_html():
    return send_file('factors.html')

@app.route('/preference.html')
def preference_html():
    return send_file('preference.html')

@app.route('/references.html')
def references_html():
    return send_file('references.html')

@app.route('/brands')
def brands():
    return send_file('brands.html')

@app.route('/products')
def products():
    return send_file('products.html')

@app.route('/refund')
def refund():
    return send_file('refund.html')

@app.route('/factors')
def factors():
    return send_file('factors.html')

@app.route('/preference')
def preference():
    return send_file('preference.html')

@app.route('/references')
def references():
    return send_file('references.html')

@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('images', filename)

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('static/js', filename)

@app.route('/flowcharts.js')
def serve_flowcharts():
    return send_file('flowcharts.js')

@app.route('/main.js')
def serve_main_js():
    return send_file('main.js')

@app.route('/custom.css')
def serve_custom_css():
    return send_file('custom.css')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
