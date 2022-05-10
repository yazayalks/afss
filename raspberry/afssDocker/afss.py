from email import header
from xml.dom.expatbuilder import parseString
import serial
import datetime
import requests
import json
from time import sleep
from auto import getTest
import operator

#class Threshold:
    #def __init__(self, name, value):
        #self.name = name
        #self.value = value



mod = "automation"

baseUrl = 'https://afss.site/api/Update'
thresholdsUrl = 'https://afss.site/api/GetThresholds'

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.flush()

headers = requests.utils.default_headers()
headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'

getTest()

def automating():
  print('automating')
  
def damping():
  print('damping')

def customing():
  print('customing')
  valueSend = (servoType * 100 + servoValue)
  newStr = "\n"
  #print(type * 100 + value)
  # print("{valueSend}\n")
  ser.write((str(valueSend) + newStr).encode ('utf-8'))
  # sleep(0.5)
def checkValue(valuesData, thresholdsData, criticalData):
  if float(valuesData['tmpStove']) >= int(thresholdsData['criticalTmpStove']) :
    criticalData.append('tmpStove')
    global statusCriticalTmp
    statusCriticalTmp = True
  if float(valuesData['tmpRoom']) >= int(thresholdsData['criticalTmpRoom']) :
    criticalData.append('tmpRoom')
  if float(valuesData['presTank']) >= int(thresholdsData['criticalPressureTank']) :
    criticalData.append('presTank')
    global statusCriticalPressure
    statusCriticalPressure = True
  if float(valuesData['watLevTank']) <= int(thresholdsData['minWaterLevel']) :
    criticalData.append('watLevTank')
    global statusCriticalWater
    statusCriticalWater = True
  if float(valuesData['gasLev']) <= int(thresholdsData['criticalGasLevel']) :
    criticalData.append('gasLev')
    global statusCriticalGas
    statusCriticalGas = True

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

t = requests.get(thresholdsUrl, params={'count': "last", 'key': key}, headers=headers)

if t.status_code == 200:
  print(t.json())
  thresholds = json.loads(t.text)

  #minTmpStove = Threshold('minTmpStove', thresholds[0]["minTmpStove"])
  #maxTmpStove = Threshold('maxTmpStove', thresholds[0]["maxTmpStove"])
  #criticalTmpStove = Threshold('criticalTmpStove', thresholds[0]["criticalTmpStove"])

  #minTmpStove = Threshold('minTmpTank', thresholds[0]["minTmpTank"])
  #maxTmpTank = Threshold('maxTmpTank', thresholds[0]["maxTmpTank"])
  #criticalTmpTank = Threshold('criticalTmpTank', thresholds[0]["criticalTmpTank"])

  #minTmpRoom = Threshold('minTmpRoom', thresholds[0]["minTmpRoom"])
  #maxTmpRoom = Threshold('maxTmpRoom', thresholds[0]["maxTmpRoom"])
  #criticalTmpRoom = Threshold('criticalTmpRoom', thresholds[0]["criticalTmpRoom"])

  #minWaterLevel = Threshold('minWaterLevel', thresholds[0]["minWaterLevel"])
  #maxWaterLevel = Threshold('maxWaterLevel', thresholds[0]["maxWaterLevel"])
  #volumeWaterLevel = Threshold('volumeWaterLevel', thresholds[0]["volumeWaterLevel"])

  #minGasLevel = Threshold('minGasLevel', thresholds[0]["minGasLevel"])
  #maxGasLevel = Threshold('maxGasLevel', thresholds[0]["maxGasLevel"])
  #criticalGasLevel = Threshold('criticalGasLevel', thresholds[0]["criticalGasLevel"])

  #minPressureTank = Threshold('minPressureTank', thresholds[0]["minPressureTank"])
  #maxPressureTank = Threshold('maxPressureTank', thresholds[0]["maxPressureTank"])
  #criticalPressureTank = Threshold('criticalPressureTank', thresholds[0]["criticalPressureTank"])

  thresholdsData = {
  'minTmpStove' : thresholds[0]["minTmpStove"], 
  'maxTmpStove' : thresholds[0]["maxTmpStove"],
  'criticalTmpStove' : thresholds[0]["criticalTmpStove"], 
  'minTmpStove' : thresholds[0]["minTmpTank"],
  'maxTmpTank' : thresholds[0]["maxTmpTank"], 
  'criticalTmpTank' : thresholds[0]["criticalTmpTank"], 
  'minTmpRoom' : thresholds[0]["minTmpRoom"],
  'maxTmpRoom' : thresholds[0]["maxTmpRoom"],
  'criticalTmpRoom' : thresholds[0]["criticalTmpRoom"],
  'minWaterLevel' : thresholds[0]["minWaterLevel"],
  'maxWaterLevel' : thresholds[0]["maxWaterLevel"],
  'volumeWaterLevel' : thresholds[0]["volumeWaterLevel"],
  'minGasLevel' : thresholds[0]["minGasLevel"],
  'maxGasLevel' : thresholds[0]["maxGasLevel"],
  'criticalGasLevel' : thresholds[0]["criticalGasLevel"],
  'minPressureTank' : thresholds[0]["minPressureTank"],
  'maxPressureTank' : thresholds[0]["maxPressureTank"],
  'criticalPressureTank' : thresholds[0]["criticalPressureTank"]}
  
  #for t in thresholdsData:
    #print(str(t.value) + ' - ' + str(t.value))
#else:
  #print('send error thresholds')

while True:
    statusCriticalTmp = False
    statusCriticalWater = False
    statusCriticalGas = False
    statusCriticalPressure = False
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        data = line.split(';')
        print(data)
        if len(data) > 3 :
            # r = requests.get(baseUrl, params={'tmp0': str(data[0]), 'pressure': str(data[1]), 'water': str(data[2]), 'gas': str(data[3]), 'date': str(datetime.datetime.now()), 'key': key})
            valuesData = {
            'tmpStove': data[0],
            'tmpTank': data[1],
            'tmpRoom' : data[2],
            'presTank' : data[3],
            'watLevTank' : data[4],
            'gasLev' : data[5],
            'servoStove' : data[6],
            'servoPipe' : data[7]}

            date = str(datetime.datetime.now()),

            criticalData = []

            checkValue(valuesData, thresholdsData, criticalData)

            if mod == "damping" :
              damping()

            r = requests.get(baseUrl, params = {
            'temperatureStove' : str(valuesData['tmpStove']),
            'temperatureTank' : str(valuesData['tmpTank']),
            'temperatureRoom' : str(valuesData['tmpRoom']),
            'pressureTank' : str(valuesData['presTank']),
            'waterLevelTank' : str(valuesData['watLevTank']),
            'gasRoom' : str(valuesData['gasLev']),
            'ServoStove' : str(valuesData['servoStove']),
            'ServoPipe' : str(valuesData['servoPipe']),
            'date' : date,
            'criticalData' : str(criticalData),
            'key' : key}, 
            headers = headers)
            
            if r.status_code == 200 :
              print(r.json())
              tasks = json.loads(r.text)
              if (str(r.json()) != "[]") :
                coutnTask = len(tasks) - 1
                servoType = tasks[coutnTask]["servoType"] + 1
                servoValue = tasks[coutnTask]["servoValue"]
                #thresholdType = tasks[coutnTask]["thresholdType"]
                mod = tasks[coutnTask]["mod"]
            else :
              mod = "automation"
              print('send error data')

            if mod == "custom" :
              customing()

            if mod == "automation" :
              automating()

            
              