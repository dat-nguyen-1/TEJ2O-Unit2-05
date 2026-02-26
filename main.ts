/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Feb 2026
 * This program will display the current temperature in kelvin on the micro:bit.
*/

let currentTemperatureCelsius: number
let currentTemperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    currentTemperatureCelsius = input.temperature()
    currentTemperatureKelvin = currentTemperatureCelsius + 273.15
    currentTemperatureKelvin = Math.round(currentTemperatureKelvin)

    basic.clearScreen()
    basic.showString('The temperature is: ' + currentTemperatureKelvin.toString() + ' K.')
})
