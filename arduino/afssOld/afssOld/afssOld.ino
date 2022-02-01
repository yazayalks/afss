#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

#define WATER_LEVEL_PIN A1
#define GAS_PIN A0
#define UPDATE_TIME 2000

Adafruit_BME280 bme; // I2C
unsigned long delayTime;

void setup() {
    Serial.begin(9600);
    while(!Serial);    // time to get serial running;
    
    bme.begin(0x76);  
}


void loop() { 
    printValues();
    delay(UPDATE_TIME);
}


void printValues() {
    String temperatureStr = String(bme.readTemperature());
    String pressureStr = String(bme.readPressure() / 100.0F);
    String waterLevelStr = String(analogRead(WATER_LEVEL_PIN));
    String gasStr = String(analogRead(GAS_PIN));
    String resultStr = temperatureStr + ";" + pressureStr + ";" + waterLevelStr + ";" + gasStr;
  
    Serial.println(resultStr);
}
