int servoPin = 9; // сигнальный провод от серво на порт 9
int servoPin2 = 10; // сигнальный провод от серво на порт 9
int valServo;

void setup()
{
  pinMode(servoPin, OUTPUT);
  pinMode(servoPin2, OUTPUT);
  Serial.begin(9600);
  Serial.println("Servo is ready");
}

void loop()
{
    // convert number 0 to 9 to corresponding 0-90 degree angle
   if (Serial.available() > 0) {
     valServo = Serial.parseInt();
     if (valServo >= 10 && valServo <= 19) 
     {
          valServo = valServo - 10; // convert to numerical variable
          valServo = valServo * (90 / 9); // convert number to angle
          Serial.print("moving servo to ");
          Serial.print(valServo);
          Serial.println();
          // giving the servo time 
          //to rotate to commanded position
          for (int i = 0; i <= 50; i++) 
          {
            servoPulse(servoPin, valServo);
          }
     }
     if (valServo >= 20 && valServo <= 29) 
     {
          valServo = valServo - 20; // convert to numerical variable
          valServo = valServo * (90 / 9); // convert number to angle
          Serial.print("moving servo2 to ");
          Serial.print(valServo);
          Serial.println();
          // giving the servo time 
          //to rotate to commanded position
          for (int i = 0; i <= 50; i++) 
          {
            servoPulse(servoPin2, valServo);
          }
     }

    }
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
