# Interactive shapes application for the coding workshop at SoundCloud Girls Day 2025

## How to run the app
To run the app, you need to have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/en/download/ .
It comes with npm, the Node.js package manager, which you'll use to install the project dependencies and run the development server.

After you've installed Node.js, you can clone the repository and run the following commands in the project directory:

`npm install`

`npm run dev`

Once it's done, you can open your browser and navigate to the provided localhost link to see the app running.
You'll see the interactive shapes demo with various shapes arranged on the screen. Click on any shape to hear its unique sound and see a random animation!



## Overview of the features and components 

A configurable **Container** component that can have:

- Background color (using Tailwind classes)
- Background image (using URLs)


A **Text** component with configurable:

* Font family
* Color
* Background color
* Size
* Position

A **Shape** component that supports multiple shapes:

Circle
* Square
* Star
* Heart
* Cloud
* Flower
* Butterfly
* Moon

Each **shape** has configurable:

* Color
* Opacity
* Size
* Border color and width
* Border radius (for square)
* Position
* Click animation (random from: scale, fade, slide, bounce, wobble, shake)
* Unique sound when clicked (using Tone.js)


### The app uses:

* Framer Motion for smooth animations
* Tone.js for sound generation
* TypeScript for type safety
* Tailwind CSS for styling
* SVG paths for shape rendering

Each shape plays a different musical note when clicked and has a random animation from the predefined set. The shapes are also interactive with hover effects and smooth transitions.

