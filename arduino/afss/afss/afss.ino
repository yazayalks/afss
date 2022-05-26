#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include "Adafruit_NeoPixel.h"

#include "max6675.h" // Подключаем библиотеку 
#include <Servo.h>

Servo myservo1;
Servo myservo2;
#define LED_COUNT 14
#define SEND_TIME 2000
#define WATER_LEVEL_PIN A1
#define GAS_PIN A0
#define UPDATE_TIME 100
#define SERVO_TIME 1500
#define LED_PIN 11
#define SERVO_STOVE_PIN 9 // Сигнальный провод от серво печи на порт 9
#define SERVO_PIPE_PIN 10 // Сигнальный провод от серво трубы на порт 10 
#define TEMPERATURE_STOVE_SCK 8 // Указываем к какому порту подключен вывод SCK
#define TEMPERATURE_STOVE_CS 7 // Указываем к какому порту подключен вывод CS
#define TEMPERATURE_STOVE_SO 6 // Указываем к какому порту подключен вывод SO 
#define TEMPERATURE_ROOM_SCK 5 // Указываем к какому порту подключен вывод SCK
#define TEMPERATURE_ROOM_CS 4 // Указываем к какому порту подключен вывод CS
#define TEMPERATURE_ROOM_SO 3 // Указываем к какому порту подключен вывод SO

int value = 0;
int servoTimer = 0;
int valueServoStove = 0;
int valueServoPipe = 0;
unsigned long delayTime;
int sendTimer = 0;
int typeColor = 5;

Adafruit_NeoPixel strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);
MAX6675 thermocoupleStove(TEMPERATURE_STOVE_SCK, TEMPERATURE_STOVE_CS, TEMPERATURE_STOVE_SO);
MAX6675 thermocoupleRoom(TEMPERATURE_ROOM_SCK, TEMPERATURE_ROOM_CS, TEMPERATURE_ROOM_SO);
Adafruit_BME280 bmeTank; // I2C


void setup() {
  Serial.begin(9600);
  bmeTank.begin(0x76);
  strip.begin();
  setColor(0, 0, 0);
}


void loop() {

  if (sendTimer > SEND_TIME)
  {
    sendTimer = 0;
    printValues();
  }

  if (Serial.available() > 0)
  {
    value = Serial.parseInt();
    
    if (value == 1)
    {
      if (typeColor != value)
      {
        setColor(255, 255, 0);
      }
      typeColor = 1;
    }
    
    if (value == 2)
    {
      if (typeColor != value)
      {
        setColor(255, 69, 0);
      }
      typeColor = 2;
    }
    
    if (value == 3)
    {
      if (typeColor != 3)
      {
        setColor(255, 0, 0);
      }
      typeColor = 3;
    }

    if (value == 4)
    {
      if (typeColor != 4)
      {
        setColor(0, 0, 255);
      }
      typeColor = 4;
    }
    
    if (value == 5)
    {
      if (typeColor != 5)
      {
        setColor(0, 0, 0);
      }
      typeColor = 5;
    }

    if (value >= 100 && value <= 190)
    {
      if ((valueServoStove != value - 100) && ((value - 100) % 10 == 0))
      {
        valueServoStove = value - 100;
        myservo1.attach(9);
        myservo1.write(valueServoStove);
        servoTimer = SERVO_TIME;
      }
    }

    if ((value >= 200 && value <= 290) && ((value - 100) % 10 == 0))
    {
      if (valueServoPipe != value - 200)
      {
        valueServoPipe = value - 200;
        myservo2.attach(10);
        myservo2.write(valueServoPipe);
        servoTimer = SERVO_TIME;
      }
    }
  }

  sendTimer += UPDATE_TIME;
  if (servoTimer > 0)
  {
    servoTimer -= UPDATE_TIME;
  }
  else {
    myservo1.detach();
    myservo2.detach();
  }
  delay(UPDATE_TIME);
}

void setColor(int r, int g, int b) {
  for (int i = 0; i < LED_COUNT; i++)
  {
    strip.setPixelColor(i, strip.Color(r, g, b));
  }
  strip.show();
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

  String resultStr = temperatureStoveStr + ";" + temperatureTankStr + ";" + temperatureRoomStr + ";" + pressureTankStr + ";" + waterLevelTankStr + ";" + gasRoomStr + ";" + ServoStoveStr + ";" + ServoPipeStr;

  Serial.println(resultStr);
}
