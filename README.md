# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./src.images/solution-mobile.jpg)
![](./src.images/solution-desktop.jpg)

### Links

- Solution URL: [https://github.com/Robert-Rynard/signup-form-react](https://github.com/Robert-Rynard/signup-form-react)
- Live Site URL: [https://robert-rynard.github.io/signup-form-react/](https://robert-rynard.github.io/signup-form-react/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This challenge provided good practice with using state to store values for forms as well as apply conditional logic to determine the validity of the input. The logic in this project checks if any of the inputs are black and applies an error message and style. In the case of the eamil it will check if it is empty or if the email address input is valid. I created a reusable input component that manages it's own state of validity. I also used CSS Grid for the layout of this site and gained more confidence in my knowledge of Grid.

## Author

- Website - [Robert Rynard](https://github.com/Robert-Rynard)
- Frontend Mentor - [@Robert-Rynard](https://www.frontendmentor.io/profile/Robert-Rynard)
- Twitter - [@robert_rynard](https://www.twitter.com/robert_rynard)
