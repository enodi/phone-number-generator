# Phone Number generator
[![CircleCI](https://circleci.com/gh/enodi/phone-number-generator.svg?style=svg)](https://circleci.com/gh/enodi/phone-number-generator) [![Coverage Status](https://coveralls.io/repos/github/enodi/phone-number-generator/badge.svg?branch=develop)](https://coveralls.io/github/enodi/phone-number-generator?branch=develop)

## Introduction
Phone number generator is a Javascript application that generates random phone numbers for a company. It allows a user
to specify the number of phone numbers (s)he wants to generate. The application then generates the random phone numbers based on the total number of phone numbers specified by the user. The result is then saved in a text file which can be downloaded by the user.

### Installation and Setup
* Navigate to a directory within your terminal
* Clone this repo to your directory
  * Using HTTP; ```$ git clone https://github.com/enodi/phone-number-generator.git```
* Navigate to the root directory e.g ```$ cd phone-number-generator```
* Create a ```.env``` file in the root directory. See an example of the content of ```.env``` file in ```.env.txt```
* Run ```npm install``` to install project dependencies
* Start the application
  * Server-side: ```npm run start:dev```
  * Client-side: ```npm run dev:build```

### TEST
* To run test, navigate to the root directory
  * Run ```npm test```

### API
Request Type | Endpoint | Action
------------ | -------------  | ------------- 
POST | /api/v1/phone-number?order | Generates a list of random phone numbers
GET | /api/v1/phone-number  | Retrieves the list of random phone numbers generated
GET | /api/v1/phone-number/download  |  Downloads the list of random phone numbers generated and saves in a file
