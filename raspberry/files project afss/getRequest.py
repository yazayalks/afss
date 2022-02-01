import datetime
import requests

gas = True
date = datetime.datetime.now()
baseUrl = 'https://afss.site/api/Update'

r = requests.get(baseUrl, params={'gas': str(gas), 'date': str(date)})
print(r.status_code)

if r.status_code == 200:
    print(r.json())
else:
    print('send error')

