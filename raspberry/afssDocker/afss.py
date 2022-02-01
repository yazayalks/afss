import serial
import datetime
import requests

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
            else:
                print('send error')

