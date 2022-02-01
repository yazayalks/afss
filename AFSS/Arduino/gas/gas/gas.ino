#include <Wire.h>
#include <Adafruit_Sensor.h>

#define GAS_PIN A0
#define UPDATE_TIME 2000


void setup() {


}


void loop() { 
    printValues();
    delay(UPDATE_TIME);
}


void printValues() {

    String gasStr = String(analogRead(GAS_PIN));
  
    printf("%s", gasStr);
}
