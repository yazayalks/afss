/*
 Тестировалось на Arduino IDE 1.8.5
 Дата тестирования 07.02.2021г.
 */
 #include "max6675.h"                // Подключаем библиотеку 
 int thermoSCK = 8;                 // Указываем к какому порту подключен вывод SCK
 int thermoCS = 7;                  // Указываем к какому порту подключен вывод CS
 int thermoSO = 6;                  // Указываем к какому порту подключен вывод SO
 int thermo2SCK = 5;                 // Указываем к какому порту подключен вывод SCK
 int thermo2CS = 4;                  // Указываем к какому порту подключен вывод CS
 int thermo2SO = 3;                  // Указываем к какому порту подключен вывод SO
 MAX6675 thermocouple(thermoSCK, thermoCS, thermoSO);
 MAX6675 thermocouple2(thermo2SCK, thermo2CS, thermo2SO);
 void setup() 
 {
   Serial.begin(9600);               // Открытие последовательного порта на скорости 9600
   Serial.println("MAX6675 test");   // Отправка текста 
   delay(500);                       // Пауза
 }
 void loop() 
 {
    Serial.print("C = ");                           // Отправка текста в последовательный порт
    Serial.println(thermocouple.readCelsius());     // Чтение и отправка температуры в последовательный порт
    Serial.print("F = ");                           // Отправка текста в последовательный порт
    Serial.println(thermocouple.readFahrenheit());  // Чтение и отправка температуры в последовательный порт
    Serial.print("C-2 = ");                           // Отправка текста в последовательный порт
    Serial.println(thermocouple2.readCelsius());     // Чтение и отправка температуры в последовательный порт
    Serial.print("F-2 = ");                           // Отправка текста в последовательный порт
    Serial.println(thermocouple2.readFahrenheit());  // Чтение и отправка температуры в последовательный порт
    delay(1000);                                    // Пауза
 }
