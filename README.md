# Modal Test Assignment
See [demo](https://modal-test-assignment.vercel.app/?userElo=1400).

## Built with
This is a TypeScript [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Relying on dependencies as:
* [Styled Components](https://styled-components.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [SWR](https://swr.vercel.app/)
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
Show ranks by visiting the modal rendering page at [http://localhost:3000?userElo=1400](http://localhost:3000?userElo=1400).
Increase or decreased the `userElo` query parameter to simulate a variety of different user ranks.

The page will fetch ranks from the API-endpoint at [http://localhost:3000/api/rank](http://localhost:3000/api/rank) and render
the modal when the request is complete.

## Todo
* Responsiveness
* Shadowing of "irrelevant" ranks