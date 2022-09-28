# Weather Report

## Skills Assessed

- Structuring content in HTML
- Applying styles with CSS
- Using variables
- Creating functions
- Manipulating the DOM
- Handling events
- Using Git
- Designing an intentional user experience

## Goal

Our goal is to create a fun, small weather app that focuses on displaying the weather.

Instead of getting weather data from a data source, we will set the weather using user interaction.


## JavaScript Requirements

This project was created with vanilla JavaScript


## Wave 2: Increase and Decrease Temperature

### Features

A numeric temperature is  displayed. This temperature can be in either Fahrenheit or Celsius degrees.

1. An element that increases the temperature by one degree on click
2. An element that decreases the temperature by one degree on click

#### Temperature Ranges Change Text Color

Depending on what temperature it is, either:

- the temperature number changes color
- the background of the temperature changes color


| Temperature (F) | Color  |
| --------------- | ------ |
| 80+             | Red    |
| 70-79           | Orange |
| 60-69           | Yellow |
| 50-59           | Green  |
| 49 or below     | Teal   |

#### Temperature Ranges Change Landscape

Depending on what temperature it is, a different landscape appears on the page.

Changing landscapes should _replace_ the existing landscape. There should only be one visible landscape at a time.

| Temperature (F) | Landscape                         |
| --------------- | --------------------------------- |
| 80+             | `"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"`       |
| 70-79           | `"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"`      |
| 60-69           | `"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"`        |
| 59 or below     | `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"` |


### Selection Changes Sky

When a user selects an option from the dropdown element, the appropriate sky appears on the page.

S| Option | Sky                           |
| ------ | ----------------------------- |
| Sunny  | `"☁️ ☁️ ☁️ ☀️ ☁️ ☁️"`         |
| Cloudy | `"☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"` |
| Rainy  | `"🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"`          |
| Snowy  | `"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"`       |

