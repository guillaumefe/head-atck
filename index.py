#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['HEAD'])
def q1():
    print('okoko')
    return 'ehllo world'

@app.route('/h', methods=['GET'])
def q2():
    print('okoko')
    return 'ehllo world'
