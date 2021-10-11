from flask import Flask, render_template, jsonify, request
import sqlite3
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    con = sqlite3.connect('energy_consumption.db')
    result = []
    cur = con.execute('SELECT entity, oil, gas, coal, solar, hydro, nuclear, wind, other, biofuel FROM "energy-consumption-by-source-and-region" WHERE year = 2019 AND entity IN ("Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico", "South Korea", "South Africa", "Russia", "Saudi Arabia", "Turkey", "United Kingdom", "United States", "Europe")')

    for row in cur:
        result.append(list(row))
    con.close()
    return jsonify(result)