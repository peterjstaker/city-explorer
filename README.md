# city-explorer

Deployed at: [https://cityexplorer.netlify.app/](https://cityexplorer.netlify.app/)

**Author**: Peter Staker
**Version**: 1.0.4

## Overview

Users should be able to search for location data by city name. A map, location details and longitude and latitude are displayed to the screen.

## Getting Started

In order to run this application on your own machine:

1. clone or fork the repository

1. run npm install in the project directory

1. sign up for an account and get an access token from [https://locationiq.com/](https://locationiq.com/)

1. Create a .env file in root directory and add the following:

> REACT_APP_LOCATION_KEY=<\access token goes here>

1. In your terminal, enter:

> npm start

The project should now be running on localhost:3000

## Architecture

Created using React.JS, axios and location.io API.

Data Flow Diagram created with [Jessi Velasquez](https://github.com/JessiVelazquez):

![DFD](src/dataflow.png)

## Change Log

03-22-2021 6:51pm - Application now fully-functional, with styling and updated README.
03-23-2021 3:43pm - Recieves weather data from backend API.

## Credit and Collaborations

Data Flow Diagram created with [Jessi Velasquez](https://github.com/JessiVelazquez)

## Time Estimates

Name of feature: Repository and API Key Setup

Estimate of time needed to complete: 1 hour

Start time: 1:30pm

Finish time: 2:15pm

Actual time needed to complete: 45 minutes

***

Name of feature: Locations - Form and API Call

Estimate of time needed to complete: 1 hour

Start time: 2:30pm

Finish time: 3:15pm

Actual time needed to complete: 1 hour

***

Name of feature: Map - Display Map of Search Result

Estimate of time needed to complete: 1 hour

Start time: 3:30pm

Finish time: 5pm

Actual time needed to complete: 1.5 hours

***

Name of feature: Errors - Error Handling and Displaying Error

Estimate of time needed to complete: 1 hour

Start time: 5pm

Finish time: 6:30pm

Actual time needed to complete: 1.5 hours
