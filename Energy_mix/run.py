from flask import Flask, render_template, jsonify, request
import sqlite3
app = Flask(__name__)

ENERGYDB = 'energy_consumption.db'

@app.route('/', methods=['GET', 'POST'])
def index():
    con = sqlite3.connect(ENERGYDB)
    years = []
    cur = con.execute('SELECT year FROM "energy-consumption-by-source-and-region" WHERE entity = "Japan"')
    for row in cur:
        years.append(list(row))
    return render_template('index.html', years=years)

@app.route('/data')
def data():
    con = sqlite3.connect(ENERGYDB)
    result = []
    cur = con.execute('SELECT entity, oil, gas, coal, solar, hydro, nuclear, wind, other, biofuel FROM "energy-consumption-by-source-and-region" WHERE year = 2019 AND entity IN ("Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico", "South Korea", "South Africa", "Russia", "Saudi Arabia", "Turkey", "United Kingdom", "United States", "Europe")')

    for row in cur:
        result.append(list(row))
    con.close()
    return jsonify(result)


""" 
country = {}

@app.route('/', methods=['GET', 'POST'])
def index():
  con = sqlite3.connect(KCALDB)
  years = []
  year = 1961
  cur = con.execute('SELECT year FROM food_supply_kcal WHERE entity = "Japan"')
  for row in cur:
    years.append(list(row))

  if request.method == 'POST':
    year = request.form['years']
    print(year)
    cur = con.execute('SELECT entity, kcal FROM food_supply_kcal WHERE year = ?', (year,))
    for row in cur:
      country[row[0]] = getColor(row[1])

  if request.method == 'GET':
    cur = con.execute('SELECT entity, kcal FROM food_supply_kcal WHERE year = "1961"')
    for row in cur:
      country[row[0]] = getColor(row[1])

  con.close()
  return render_template('index.html', years=years, country=country, selected=int(year)) 




@app.route('/data')
def data():
    con = sqlite3.connect(ENERGYDB)
    result = []
    cur = con.execute('SELECT entity, oil, gas, coal, solar, hydro, nuclear, wind, other, biofuel FROM "energy-consumption-by-source-and-region" WHERE year = 2019 AND entity IN ("Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico", "South Korea", "South Africa", "Russia", "Saudi Arabia", "Turkey", "United Kingdom", "United States", "Europe")')

    for row in cur:
        result.append(list(row))
    con.close()
    return jsonify(result)
  """