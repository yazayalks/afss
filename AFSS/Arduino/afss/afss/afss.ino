#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include "max6675.h" // Подключаем библиотеку 

#define WATER_LEVEL_PIN A1
#define GAS_PIN A0
#define UPDATE_TIME 2000
#define SERVO_STOVE_PIN 9 // Сигнальный провод от серво печи на порт 9
#define SERVO_PIPE_PIN 10 // Сигнальный провод от серво трубы на порт 10 
#define TEMPERATURE_STOVE_SCK 8 // Указываем к какому порту подключен вывод SCK
#define TEMPERATURE_STOVE_CS 7 // Указываем к какому порту подключен вывод CS
#define TEMPERATURE_STOVE_SO 6 // Указываем к какому порту подключен вывод SO 
#define TEMPERATURE_ROOM_SCK 5 // Указываем к какому порту подключен вывод SCK
#define TEMPERATURE_ROOM_CS 4 // Указываем к какому порту подключен вывод CS
#define TEMPERATURE_ROOM_SO 3 // Указываем к какому порту подключен вывод SO
int valueServoStove = 0;
int valueServoPipe = 0;
unsigned long delayTime;

MAX6675 thermocoupleStove(TEMPERATURE_STOVE_SCK, TEMPERATURE_STOVE_CS, TEMPERATURE_STOVE_SO);
MAX6675 thermocoupleRoom(TEMPERATURE_ROOM_SCK, TEMPERATURE_ROOM_CS, TEMPERATURE_ROOM_SO);
Adafruit_BME280 bmeTank; // I2C


void setup() {
    Serial.begin(9600);
    //while(!Serial);    // time to get serial running;
    pinMode(SERVO_STOVE_PIN, OUTPUT);
    pinMode(SERVO_PIPE_PIN, OUTPUT);
    Serial.println("Servo is ready");
    
    bmeTank.begin(0x76);  
}


void loop() { 
    printValues();
    // convert number 0 to 9 to corresponding 0-90 degree angle
   if (Serial.available() > 0) {
     valueServoStove = Serial.parseInt();
     if (valueServoStove >= 10 && valueServoStove <= 19) 
     {
          valueServoStove = valueServoStove - 10; // convert to numerical variable
          valueServoStove = valueServoStove * (90 / 9); // convert number to angle
          Serial.print("moving servo stove to ");
          Serial.print(valueServoStove);
          Serial.println();
          // giving the servo time 
          //to rotate to commanded position
          for (int i = 0; i <= 50; i++) 
          {
            servoPulse(SERVO_STOVE_PIN, valueServoStove);
          }
     }
     if (valueServoPipe >= 20 && valueServoPipe <= 29) 
     {
          valueServoPipe = valueServoPipe - 20; // convert to numerical variable
          valueServoPipe = valueServoPipe * (90 / 9); // convert number to angle
          Serial.print("moving servo pipe to ");
          Serial.print(valueServoPipe);
          Serial.println();
          // giving the servo time 
          //to rotate to commanded position
          for (int i = 0; i <= 50; i++) 
          {
            servoPulse(SERVO_PIPE_PIN, valueServoPipe);
          }
     }

    }
    delay(UPDATE_TIME);
}


void printValues() {
    String temperatureTankStr = String(bmeTank.readTemperature());
    String pressureTankStr = String(bmeTank.readPressure() / 100.0F);
    String waterLevelTankStr = String(analogRead(WATER_LEVEL_PIN));
    String gasRoomStr = String(analogRead(GAS_PIN));
    String temperatureStoveStr = String(thermocoupleStove.readCelsius());
    String temperatureRoomStr = String(thermocoupleRoom.readCelsius());
    String ServoStoveStr = String(valueServoStove);
    String ServoPipeStr = String(valueServoPipe);
  
    //String resultStr = thermocoupleStr + ";" + thermocouple2Str + ";" + temperatureStr + ";" + pressureStr + ";" + waterLevelStr + ";" + gasStr;
    String resultStr = temperatureStoveStr + ";" + temperatureTankStr + ";" + temperatureRoomStr + ";" + pressureTankStr + ";" + waterLevelTankStr + ";" + gasRoomStr + ";" + ServoStoveStr + ";" + ServoPipeStr + ";";
  Serial.println(resultStr);
}

// define a servo pulse function
void servoPulse(int pin, int angle)
{
  // convert angle to 500-2480 pulse width
  int pulseWidth = (angle * 11) + 500; 
  digitalWrite(pin, HIGH); // set the level of servo pin as high
  delayMicroseconds(pulseWidth); // delay microsecond of pulse width
  digitalWrite(pin, LOW); // set the level of servo pin as low
  delay(20 - pulseWidth / 1000);
}
