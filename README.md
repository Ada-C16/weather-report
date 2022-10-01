# Weather Report- [[Link]](https://miffybruna.github.io/weatherReport/ "Weather Report")
## Description

Interactive weather app that returns an illustration of a landscape based on user input.

Showcases Front-end expertise and strong sense of aesthetics.

## Technologies

This project was created with vanilla JavaScript


### Features

A numeric temperature is  displayed. This temperature can be in either Fahrenheit or Celsius degrees.
Increase and Decrease Temperature

1.Button that increases the temperature by one degree on click
2.Button that decreases the temperature by one degree on click
3.Drop down menu that allows you to switch the icons on the weather display
4.Allows user to switch the title based on user input

---

#### SPECIFICATIONS

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

