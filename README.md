# RGB Clock

A dynamic RGB clock that changes its background color based on the current time. The project also updates the webpage's favicon to match the background color. This serves as a simple and visually appealing example of using JavaScript to manipulate the DOM and create dynamic content. Iterates from #000000 to #FFFFFF resetting at 00:00, daily. 

Since there are 16,777,216 RGB values and only 86,400 seconds per day, we will be skipping about 193 of the possible values in that second.

Additionally, the hexidecimal plot is not in color spectrum order, so the colors may bounce around. The text is the interpolation of the background color. To view the clock in a gradient of color, the HSL spectrum would have to be used, but plotting a three-dimensional color set in one dimension is impossible to do with spectrum linearity. 

A sister project will be released, iterating on the same logic, but with the hue range in HSL raising throughout the day. This would give the perception of certain hours as certain colors.   

## Features

- **Dynamic Background Color:** The background color changes based on the current time, creating a visually changing experience.
- **Favicon Color Matching:** The favicon dynamically matches the background color for a cohesive design.

## Demo GIF

![RGB Clock Demo](https://imgur.com/ZaEEyAq.gif)

## Getting Started

### Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/rgb-clock.git
    cd rgb-clock
    ```

2. Open `index.html` in your preferred web browser.

3. Observe the dynamic changes in background color and favicon.

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, feel free to open an issue or create a pull request.
