<div align="center">
<img src="https://github.com/BrianSturgis.png" width="200px" height="auto" >
</div>
<p align="center"> Authored by Brian Sturgis</p>
<p align="center">Updated on Feb 12th, 2020</p>


## Detailed Description
MAKE SURE TO READ INSTRUCTIONS REGARDING PROTECTING YOUR API KEY BELOW!

This is an currency exchange application that will take in a amount in U.S dollars and convert it into a foriegn currency.  To come to this solution the application will use "exchange rate API" and javascript to provide solutions.

This application is built currently to be displayed in full screen otherwise the UI will not align correctly with the background artwork.

## KNOWN BUGS


## Setup/Installation Requirements

## GIT HUB
- repository location (https://github.com/BrianSturgis/Janweek6project
- open through a git termianl or clone editor.
- got to repo location.
- using git commands clone to local repo or click "download" and unpack on machine

## USING THIS APPLICATION
his app uses node.js. If you do not already have node.js installed, visit https://nodejs.org/en/download/ and install.
After installing node, navigate to the root directory of the cloned repo and type in "npm install".
Then type in "npm run build".

If you would like to run the program through the server, you can type "npm run start" which will build the program and launch the preview to the local server.

If you use Jest to run your tests, open your terminal and go to the root of the project directory and type in "npm test".
If you would like to run the program through the server, you can type "npm run start" which will build the program and launch the preview to the local server.

## API IN

For this application, you will need to get a secure API key of your own in order for the application to run properly. Please carefully follow along with the instructions below to get your own API key securely.
- go to https://www.exchangerate-api.com/
- Type in your email address in the box where it says "Your email address" and click "Get Free Key"
- The prompt will take you to a dashboard that will show you your API Key.
- Copy and Paste into clipboard 
- and follow in the instructions below under "How to set up .env file" or see instructions below.


## Setup Instructions for API Keys
For this application, you will need to get a secure API key of your own in order for the application to run properly. Please carefully follow along with the instructions below to get your own API key securely.

- API Key and Using an .env File
In your local copy of the project, create a file called '.env' in the top level of the project's folder. You will eventually add your API Key to this file in order to keep your private data safe.

To get your own secure API key, visit (this website)[https://www.exchangerate-api.com/] to set up an account.
Input your email address and click the "Get Free Key" button.  You will be prompted to create an account with your email, first name, and a password. Agree to the terms of use and click "Get Started!"
From here, you will be automatically redirected to your account's dashboard where you will see your API Key under the second section, "API Access", on the page. Keep this page up while you complete the remaining steps for full application setup.
Testing with Postman

Next, visit (Postman's website)[https://www.postman.com/downloads/] and download the application Postman. Postman will allow you to easily check if your newly assigned API key is working.
Once downloaded, open the Postman app, and enter the following website - with your API key from your new Exchange Rate-API account in the noted place in the URL link - into the "GET" query bar: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD and hit the "Send" button.
Make sure the response back from Postman shows a '200 OK' code, which will mean your query was successful.

## Completing Application Setup
Once you have gotten a 200 code response (i.e. a successful response) in Postman, copy the API key and add it as a variable to the first line of your .env file in this format API_KEY={your-api-key-here}. As mentioned before, doing so will keep your personal data (the API key) private.  This is very important as committing the project with an api key will store that api key in the commit history and can be pushed to github.
Once complete the API key you acquired in the 'API Key and Using an .env File' section above will automatically apply to the currency exchange API link, and the application should run as expected.  .env files are great in conjunction with .gitignore file to keep things private.

## API ERROR CODES
- "unsupported-code" if we don't support the supplied currency code (see supported currencies...).
- "base-code-only-on-pro" if a request to the free.exchange rate-api.com endpoint is for a base code other than USD or EUR.
- "malformed-request" when some part of your request doesn't follow the structure shown above.
- "invalid-key" when your API key is not valid.
- "quota-reached" when your account has reached the the number of requests allowed by your plan.
- "not-available-on-plan" if your plan level doesn't support this type of request.

## Stretch goals
- improved button design
- improved and animated user interface
- more currencies

## Support and contact details
email Brian Sturgis @ <sturujisu@gmail.com>


## Specs
```JS



//make and api cal
Test:
expect:

// get api rate in json
Test:
expect:

// go to ui logic
Test:
expect:




```


## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Coffee
* jest
* Babel
* lint
* webpack


### License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..



Copyright (c) 2020 **Brian Micheal Sturgis**
