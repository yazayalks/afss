from xml.dom.expatbuilder import parseString
import serial
import datetime
import requests
import json
from time import sleep

def getserial():
  # Extract serial from cpuinfo file
  cpuserial = "0000000000000000"
  try:
    f = open('/proc/cpuinfo','r')
    for line in f:
      if line[0:6]=='Serial':
        cpuserial = line[10:26]
    f.close()
  except:
    cpuserial = "ERROR000000000"

  return cpuserial

key = getserial()

baseUrl = 'https://afss.site/api/Update'
ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.flush()

while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        data = line.split(';')
        print(data)
        if len(data) > 3 :
            # r = requests.get(baseUrl, params={'tmp0': str(data[0]), 'pressure': str(data[1]), 'water': str(data[2]), 'gas': str(data[3]), 'date': str(datetime.datetime.now()), 'key': key})
            r = requests.get(baseUrl, params={'temperatureStove': str(data[0]), 'temperatureTank': str(data[1]), 'temperatureRoom': str(data[2]), 'pressureTank': str(data[3]), 'waterLevelTank': str(data[4]), 'gasRoom': str(data[5]), 'ServoStove': str(data[6]), 'ServoPipe': str(data[7]), 'date': str(datetime.datetime.now()), 'key': key})
            if r.status_code == 200:
                print(r.json())
                tasks = json.loads(r.text)
                if (str(r.json()) != "[]"):
                  coutnTask = len(tasks)
                  # print(coutnTask)
                  i = 0
                  while i < coutnTask:
                    type = tasks[i]["type"] + 1
                    value = tasks[i]["value"]
                    valueSend = (type * 100 + value)
                    newStr = "\n"
                    # print(type * 100 + value)
                    # print("{valueSend}\n")
                    ser.write((str(valueSend) + newStr).encode ('utf-8'))
                    # sleep(0.5)
                    i += 1
            else:
                print('send error')

