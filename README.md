# Project Instructions

## Initialize app using 
```
npm install
```

## Required Setup
You will need valid APP_ID and APP_KEY for the Aylien 3rd-party service.
Create a `.env` file under the root directory level (`package.json` level) and set the credentials there in the following format:
```
API_ID=YOUR_API_ID
API_KEY=YOUR_API_KEY
```

## Commands
- run dev server using `npm run build-dev`
- build for production using `npm run build-prod`
- run the production version with `npm run start`
- run tests with `npm test`

## Offline mode
The service worker can be tested if you stop the server and refresh the page - the content will be still loaded.