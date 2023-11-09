## [Agendrix](https://www.agendrix.com/)'s public API JS integration example

This project is an example of how to integrate with Agendrix's public API, from the OAuth authentication to making calls to the API itself. Both the client and the server are in Typescript. The client app uses [React](https://reactjs.org/) while the server uses [Express](https://expressjs.com/).

This application is a good example of:
 - how to interact with Agendrix's OAuth provider.
 - how to securely store your tokens received from the OAuth provider.
 - how to make calls to Agendrix's API.
 - the refresh flow implementation, mandatory when using Agendrix's API (the access tokens have a TTL of **2 hours**).

This application is **NOT**:
 - An example of the best programming practices for a web app. The goal here is really to give a good idea of what you need in order to integrate with the API, not what a web app should be like.
 - A project meant to be copied in a production environment.

### Play with the example

If you want to run the application yourself, follow these steps:
1. Go to the [Developer Portal](https://developers.agendrix.com) to retrieve your sandbox credentials.
1. In [credentials.ts](./shared/credentials.ts), change the constants `clientID` and `clientSecret` for your credentials.
1. In the [Developer Portal](https://developers.agendrix.com) interface, add this web app home page - https://localhost:3000/home - to your credentials redirect uris.
1. Start the app:

   ````bash
   yarn install
   yarn start
   ````

node version needs to be 16 or lower.

Open https://localhost:3000 and enjoy!

