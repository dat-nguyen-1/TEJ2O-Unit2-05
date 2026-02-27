"""
Created by: Dat Nguyen
Created on: Feb 2026
This program will display the current temperature on the Micro:bit.
"""

from microbit import *

# Initialization
display.clear()
display.show(Image.HAPPY)

# Main loop
while True:
    if button_a.is_pressed():
        current_temperature_celsius = temperature()
        current_temperature_kelvin = round(current_temperature_celsius + 273.15)

        display.scroll("The temperature is: " + str(current_temperature_kelvin) + " C.")
