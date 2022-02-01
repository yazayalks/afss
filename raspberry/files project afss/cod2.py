# Автономная пожарная сигнализация в бане
import RPi.GPIO as GPIO 
import board 
import time 

gasPin = 17

def gasCallback(channel): 
    print('gas datcik') 
    time.sleep(1) 

 
def init(): 
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(gasPin, GPIO.IN)
    GPIO.add_event_detect(gasPin, GPIO.FALLING, callback=gasCallback)
    
init()

while(True): 
    time.sleep(1)
    print(1) 
 
dhtDevice.exit()
