from email import header
from pickle import TRUE
from xml.dom.expatbuilder import parseString
import serial
import datetime
import requests
import json
import pygame 
from time import sleep
import operator
from timer import Timer

pygame.init()

timerCritical= Timer()
timerDamping = Timer()

statusStart = False
statusCriticalTmpStove = False
statusCriticalWater = False
statusMaxGas = False
statusCriticalGas = False
statusCriticalPressure = False
statusCriticalTmpRoom = False

statusSound = True
statusLight = True

mod = "automation"

servoPipe = 0
servoStove = 1

baseUrl = 'https://afss.site/api/Update'
thresholdsUrl = 'https://afss.site/api/GetThresholds'
settingsUrl = 'https://afss.site/api/GetPiSettings'

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.flush()

headers = requests.utils.default_headers()
headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'

def playSoundStart() : 
  global statusStart
  global statusSound
  if statusStart == False and statusSound == True :
    pygame.mixer.music.load("sounds/start.wav") 
    pygame.mixer.music.play()
    statusStart = True

def playSoundMaxGas() : 
  global statusMaxGas
  global statusSound
  if statusMaxGas == False and statusSound == True :
    pygame.mixer.music.load("sounds/maxGas.wav") 
    pygame.mixer.music.play()
    statusMaxGas = True

def playSoundCritGas() : 
  global statusCriticalGas
  global statusSound
  if statusCriticalGas == False and statusSound == True :
    pygame.mixer.music.load("sounds/critGas.wav") 
    pygame.mixer.music.play()
    statusCriticalGas = True

def playSoundRoom() : 
  global statusCriticalTmpRoom
  global statusSound
  if statusCriticalTmpRoom == False and statusSound == True :
    pygame.mixer.music.load("sounds/room.wav") 
    pygame.mixer.music.play()
    statusCriticalTmpRoom = True

def playSoundWater() : 
  global statusCriticalWater
  global statusSound
  if statusCriticalWater == False and statusSound == True :
    pygame.mixer.music.load("sounds/water.wav") 
    pygame.mixer.music.play()
    statusCriticalWater = True

def playSoundPressure() : 
  global statusCriticalPressure
  if statusCriticalPressure == False :
    pygame.mixer.music.load("sounds/pressure.wav") 
    pygame.mixer.music.play()
    statusCriticalPressure = True

def playSoundStove() : 
  global statusCriticalTmpStove
  if statusCriticalTmpStove == False :
    pygame.mixer.music.load("sounds/stove.wav") 
    pygame.mixer.music.play()
    statusCriticalTmpStove = True

def automating(valuesData, thresholdsData) :
  print('automating')

  if valuesData['tmpStove'] >= thresholdsData['minTmpStove'] and valuesData['tmpStove'] <= thresholdsData['maxTmpStove'] :
    sendActionServo(servoStove, 50)
    sendActionServo(servoPipe, 90)

  if valuesData['tmpStove'] >= thresholdsData['maxTmpStove'] and valuesData['tmpStove'] <= thresholdsData['criticalTmpStove'] :
    sendActionServo(servoStove, 30)
    sendActionServo(servoPipe, 70)
    
def criticaling() :
  print('criticaling')

  timerCritical.start()
  print(timerCritical.getTime())

  if timerCritical.getTime() < 30 :
    sendActionServo(servoStove, 20)
    sendActionServo(servoPipe, 60)

  if timerCritical.getTime() > 30  and timerCritical.getTime() < 60 :
    sendActionServo(servoStove, 10)
    sendActionServo(servoPipe, 50)

  if timerCritical.getTime() > 60  and timerCritical.getTime() < 120 :
    sendActionServo(servoStove, 0)
    sendActionServo(servoPipe, 40)
  
  if timerCritical.getTime() > 120 :
    sendActionServo(servoStove, 0)
    sendActionServo(servoPipe, 30)

def damping():
  print('damping')

  timerDamping.start()
  print(timerDamping.getTime())

  if timerDamping.getTime() < 30 :
    sendActionServo(servoStove, 20)
    sendActionServo(servoPipe, 60)

  if timerDamping.getTime() > 30  and timerDamping.getTime() < 60:
    sendActionServo(servoStove, 10)
    sendActionServo(servoPipe, 50)

  if timerDamping.getTime() > 60  and timerDamping.getTime() < 120:
    sendActionServo(servoStove, 0)
    sendActionServo(servoPipe, 40)

def customing():
  print('customing')
  sendActionServo(servoType, servoValue)

def sendActionServo(servoType, servoValue) :
  valueSend = ((servoType + 1) * 100 + servoValue)
  newStr = "\n"
  #print(type * 100 + value)
  # print("{valueSend}\n")
  ser.write((str(valueSend) + newStr).encode ('utf-8'))
  # sleep(0.5)

def sendTypeColor(typeColor) :
  global statusLight
  if statusLight == True :
    valueSend = typeColor
  else :
    valueSend = 4
  newStr = "\n"
  ser.write((str(valueSend) + newStr).encode ('utf-8'))

def checkValue(valuesData, thresholdsData, criticalData) :
  # Критические значения   
  if valuesData['watLevTank'] <= thresholdsData['minWaterLevel'] :
    criticalData.append('watLevTank')
    playSoundWater()
    sendTypeColor(3)

  if valuesData['tmpRoom'] >= thresholdsData['criticalTmpRoom'] :
    criticalData.append('critTmpRoom')
    playSoundRoom()
    sendTypeColor(3)

  if valuesData['tmpStove'] >= thresholdsData['criticalTmpStove'] :
    criticalData.append('critTmpStove')
    playSoundStove()
    sendTypeColor(3)
  
  if valuesData['presTank'] / 10 >= thresholdsData['criticalPressureTank'] :
    criticalData.append('critPresTank')
    playSoundPressure()
    sendTypeColor(3)

  if valuesData['gasLev'] >= thresholdsData['criticalGasLevel'] :
    criticalData.append('critGasLev')
    playSoundCritGas()
    sendTypeColor(3)

  if len(criticalData) > 0 :
    global mod
    mod = "critical"

  # Высокие значения
  if mod != "critical" :
    if valuesData['tmpRoom'] >= thresholdsData['maxTmpRoom'] and valuesData['tmpRoom'] < thresholdsData['criticalTmpRoom'] :
      criticalData.append('maxTmpRoom')
      sendTypeColor(2)

    if valuesData['tmpStove'] >= thresholdsData['maxTmpStove'] and valuesData['tmpStove'] < thresholdsData['criticalTmpStove'] :
      criticalData.append('maxTmpStove')
      sendTypeColor(2)

    if valuesData['presTank'] / 10 >= thresholdsData['maxPressureTank'] and valuesData['presTank'] / 10 < thresholdsData['criticalPressureTank'] :
      criticalData.append('maxPresTank')
      sendTypeColor(2)

    if valuesData['gasLev'] >= thresholdsData['maxGasLevel'] and valuesData['gasLev'] < thresholdsData['criticalGasLevel'] :
      criticalData.append('maxGasLev')
      playSoundMaxGas()
      sendTypeColor(2)

    if len(criticalData) == 0 :
      sendTypeColor(1)

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

playSoundStart()

t = requests.get(thresholdsUrl, params={'count': "last", 'key': key}, headers=headers)

if t.status_code == 200 :
  print(t.json())
  thresholds = json.loads(t.text)

  thresholdsData = {
  'minTmpStove' : int(thresholds[0]["minTmpStove"]), 
  'maxTmpStove' : int(thresholds[0]["maxTmpStove"]),
  'criticalTmpStove' : int(thresholds[0]["criticalTmpStove"]), 
  'minTmpStove' : int(thresholds[0]["minTmpTank"]),
  'maxTmpTank' : int(thresholds[0]["maxTmpTank"]), 
  'criticalTmpTank' : int(thresholds[0]["criticalTmpTank"]), 
  'minTmpRoom' : int(thresholds[0]["minTmpRoom"]),
  'maxTmpRoom' : int(thresholds[0]["maxTmpRoom"]),
  'criticalTmpRoom' : int(thresholds[0]["criticalTmpRoom"]),
  'minWaterLevel' : int(thresholds[0]["minWaterLevel"]),
  'maxWaterLevel' : int(thresholds[0]["maxWaterLevel"]),
  'volumeWaterLevel' : int(thresholds[0]["volumeWaterLevel"]),
  'minGasLevel' : int(thresholds[0]["minGasLevel"]),
  'maxGasLevel' : int(thresholds[0]["maxGasLevel"]),
  'criticalGasLevel' : int(thresholds[0]["criticalGasLevel"]),
  'minPressureTank' : int(thresholds[0]["minPressureTank"]),
  'maxPressureTank' : int(thresholds[0]["maxPressureTank"]),
  'criticalPressureTank' : int(thresholds[0]["criticalPressureTank"])}
  
else : 
  
  thresholdsData = {
  'minTmpStove' : 0, 
  'maxTmpStove' : 100,
  'criticalTmpStove' : 150, 
  'minTmpStove' : 0,
  'maxTmpTank' : 80, 
  'criticalTmpTank' : 100, 
  'minTmpRoom' : 0,
  'maxTmpRoom' : 100,
  'criticalTmpRoom' : 120,
  'minWaterLevel' : 10,
  'maxWaterLevel' : 70,
  'volumeWaterLevel' : 100,
  'minGasLevel' : 0,
  'maxGasLevel' : 100,
  'criticalGasLevel' : 150,
  'minPressureTank' : 0,
  'maxPressureTank' : 100,
  'criticalPressureTank' : 120}

while True :
    if ser.in_waiting > 0 :
        line = ser.readline().decode('utf-8').rstrip()
        data = line.split(';')
        print(data)
        if len(data) > 3 :
            valuesData = {
            'tmpStove': float(data[0]),
            'tmpTank': float(data[1]),
            'tmpRoom' : float(data[2]),
            'presTank' : float(data[3]),
            'watLevTank' : int(data[4]),
            'gasLev' : int(data[5]),
            'servoStove' : int(data[6]),
            'servoPipe' : int(data[7])}

            date = str(datetime.datetime.now())
            criticalData = []

            s = requests.get(settingsUrl, params={'key': key}, headers=headers)
            settings = json.loads(s.text)

            if s.status_code == 200 :
              statusSound = settings[0]["sounds"]
              statusLight = settings[0]["light"]
            else :
                statusSound = True
                statusLight = True

            checkValue(valuesData, thresholdsData, criticalData)

            
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

            if  mod != "critical" :
              if r.status_code == 200 :
                print(r.json())
                tasks = json.loads(r.text)
                if (str(r.json()) != "[]") :
                  coutnTask = len(tasks) - 1
                  servoType = tasks[coutnTask]["servoType"]
                  servoValue = tasks[coutnTask]["servoValue"]
                  mod = tasks[coutnTask]["mod"]
              else :
                mod = "automation"
                print('send error data value')

            if mod == "critical" :
              criticaling()

            if mod == "automation" :
              automating(valuesData, thresholdsData)

            if mod == "custom" :
              customing()

            if mod == "damping" :
              damping()
              