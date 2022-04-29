from email import header
from xml.dom.expatbuilder import parseString
import serial
import datetime
import requests
import json
from time import sleep
from auto import getTest
import operator

class Threshold:
    def __init__(self, name, value):
        self.name = name
        self.value = value

getTest()

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
thresholdsUrl = 'https://afss.site/api/GetThresholds'

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.flush()

headers = requests.utils.default_headers()
headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'

t = requests.get(thresholdsUrl, params={'count': "last", 'key': key}, headers=headers)

if t.status_code == 200:
  print(t.json())
  thresholds = json.loads(t.text)

  minTmpStove = Threshold('minTmpStove', thresholds[0]["minTmpStove"])
  maxTmpStove = Threshold('maxTmpStove', thresholds[0]["maxTmpStove"])
  criticalTmpStove = Threshold('criticalTmpStove', thresholds[0]["criticalTmpStove"])

  minTmpStove = Threshold('minTmpTank', thresholds[0]["minTmpTank"])
  maxTmpTank = Threshold('maxTmpTank', thresholds[0]["maxTmpTank"])
  criticalTmpTank = Threshold('criticalTmpTank', thresholds[0]["criticalTmpTank"])

  minTmpRoom = Threshold('minTmpRoom', thresholds[0]["minTmpRoom"])
  maxTmpRoom = Threshold('maxTmpRoom', thresholds[0]["maxTmpRoom"])
  criticalTmpRoom = Threshold('criticalTmpRoom', thresholds[0]["criticalTmpRoom"])

  minWaterLevel = Threshold('minWaterLevel', thresholds[0]["minWaterLevel"])
  maxWaterLevel = Threshold('maxWaterLevel', thresholds[0]["maxWaterLevel"])
  volumeWaterLevel = Threshold('volumeWaterLevel', thresholds[0]["volumeWaterLevel"])

  minGasLevel = Threshold('minGasLevel', thresholds[0]["minGasLevel"])
  maxGasLevel = Threshold('maxGasLevel', thresholds[0]["maxGasLevel"])
  criticalGasLevel = Threshold('criticalGasLevel', thresholds[0]["criticalGasLevel"])

  minPressureTank = Threshold('minPressureTank', thresholds[0]["minPressureTank"])
  maxPressureTank = Threshold('maxPressureTank', thresholds[0]["maxPressureTank"])
  criticalPressureTank = Threshold('criticalPressureTank', thresholds[0]["criticalPressureTank"])

  thresholdsData = [minTmpStove, maxTmpStove, criticalTmpStove, 
  minTmpStove, maxTmpTank, criticalTmpTank, 
  minTmpRoom, maxTmpRoom, criticalTmpRoom,
  minWaterLevel, maxWaterLevel, volumeWaterLevel,
  minGasLevel, maxGasLevel, criticalGasLevel,
  minPressureTank, maxPressureTank, criticalPressureTank]

  for t in thresholdsData:
    print(str(t.value) + ' - ' + str(t.value))
else:
  print('send error thresholds')

while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        data = line.split(';')
        print(data)
        if len(data) > 3 :
            # r = requests.get(baseUrl, params={'tmp0': str(data[0]), 'pressure': str(data[1]), 'water': str(data[2]), 'gas': str(data[3]), 'date': str(datetime.datetime.now()), 'key': key})
            tmpStove = str(data[0])
            tmpTank = str(data[1])
            tmpRoom = str(data[2])
            presTank = str(data[3])
            watLevTank = str(data[4])
            gasRoom = str(data[5])
            servoStove = str(data[6])
            servoPipe = str(data[7])
            date = str(datetime.datetime.now())
            
            r = requests.get(baseUrl, params={'temperatureStove': tmpStove, 'temperatureTank': tmpTank, 'temperatureRoom': tmpRoom, 'pressureTank': presTank, 'waterLevelTank': watLevTank, 'gasRoom': gasRoom, 'ServoStove': servoStove, 'ServoPipe': servoPipe, 'date': date, 'key': key}, headers=headers)
            if r.status_code == 200:
                print(r.json())
                tasks = json.loads(r.text)
                if (str(r.json()) != "[]"):
                  coutnTask = len(tasks)
                  # print(coutnTask)
                  i = 0
                  while i < coutnTask:
                    type = tasks[i]["servoType"] + 1
                    value = tasks[i]["servoValue"]
                    thresholdType = tasks[i]["thresholdType"]
                    mod = tasks[i]["mod"]
                    valueSend = (type * 100 + value)
                    newStr = "\n"
                    print(type * 100 + value)
                    # print("{valueSend}\n")
                    ser.write((str(valueSend) + newStr).encode ('utf-8'))
                    # sleep(0.5)
                    i += 1
            else:
                print('send error data')

