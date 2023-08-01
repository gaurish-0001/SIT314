// Name : Gaurish Bhatia
// Student ID : 222187151
// Remarks : This is the code for the task 2.2C of SIT 314.

 
// Setup part of the code, which will run once.
void setup() {
  pinMode(A1, INPUT); // Defining the interface for the sensor pin.
  Serial.begin(9600); // Start serial communication at a baud rate of 9600.
}

//  infinite loop running part.
void loop() {
  // fetching the raw ADC values from the sensor.
  float raw_adc = analogRead(A1);

  // Retrieving the voltage values from the raw_adc values fetched.
  float voltage_val = raw_adc * (5.0 / 1023.0);

  // Converting the voltage values recieved into celcius.
  float tempCel = (voltage_val - 0.5) * 100.0;

  // Converting the temperature values recieved in celcius to farenheit.
  float tempFahr = (tempCel * 9.0 / 5.0) + 32.0;

  // Displaying the same on the serial monitor.
  Serial.print("Temperature Celsius: ");
  Serial.print(tempCel);
  Serial.print(" °C, Temperature Fahrenheit: ");
  Serial.print(tempFahr);
  Serial.println(" °F");

  // adding a default delay.
  delay(1000);
}
