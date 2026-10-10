# StockVision AI

Responsive stock-market analytics dashboard prototype built with plain HTML, CSS, and JavaScript. It can be hosted on GitHub Pages without a build step.

## Features
- Responsive desktop and mobile dashboard
- Illustrative market cards and SVG performance chart
- Searchable stock universe and browser-session watchlist
- Demo forecast workflow with selectable horizon
- Navigation for overview, market watch, prediction, technical analysis, risk, watchlist, and reports
- Clear labeling of illustrative data (no fabricated live-data claims)

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Publish on GitHub Pages
1. Open repository **Settings**.
2. Choose **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Important
All displayed prices, movements, and forecasts are demo/illustrative values. No live market provider or trained machine-learning model is connected. Before using this as a live analytics product, integrate a licensed market-data API, build and validate forecasting models with time-series splits and walk-forward evaluation, and show uncertainty and source timestamps. This is educational software, not investment advice.

## Roadmap
- Licensed BEI/international market data provider
- Python forecasting service and model registry
- Time-series backtesting and leakage checks
- Secure user accounts, persisted watchlists, and exportable reports
