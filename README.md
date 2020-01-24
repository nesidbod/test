## Building

This is built with [React](https://reactjs.org/) using [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).

Create environment settings file and modify it, if needed: `cp .env.example .env`



Install dependencies: `npm install`

Run: `npm start`

Linting: `npm lint`

When running the application locally, it will connect to the production API ar <>.

If you want to run the API locally, you can make this app connect to that instead by running `npm start`

Running tests: `npm run test`

### A note on ports

This application runs on port 3000

### nginx conf

These lines need to be added to prevent 404s

```nginx
  location / {
    try_files $uri /index.html;
  }
```