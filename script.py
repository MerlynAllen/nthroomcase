#! /usr/bin/python3
#-*- coding:utf-8 -*-
from flask import *
app = Flask(__name__)
count_fp = open('count', 'r+')
COUNT = int(count_fp.read())
count_fp.close()
@app.route('/count')
def counter():
    global COUNT
    COUNT += 1
    count_fp = open('count', 'w')
    count_fp.write(str(COUNT))
    count_fp.close()
    with open('count.html', 'w') as page:
        page.write(f'There have been {COUNT} visitors visited this site!')
    return Response('success', status=200, mimetype='text/html')
if __name__ == '__main__':
    app.config['SERVER_NAME'] = 'nthroomcase.imerlyn.top:8090'
    app.run(host='0.0.0.0', port=8090, debug=True, ssl_context=('/etc/letsencrypt/live/imerlyn.top/cert.pem', '/etc/letsencrypt/live/imerlyn.top/privkey.pem'))
