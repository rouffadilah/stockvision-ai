# StockVision AI

A responsive stock-market analytics dashboard built with HTML, CSS, and JavaScript. Interface language: Indonesian and English.

## Current capabilities

- Responsive dashboard for desktop and mobile
- Candlestick chart for OHLC historical data
- Historical-data API proxy at `/api/stock` (Yahoo Finance chart endpoint; unofficial and subject to provider availability/terms)
- Technical analytics calculated from loaded historical closes:
  - RSI (14)
  - MACD line (12, 26)
  - EMA (20)
  - Bollinger Band position (20 periods, 2 standard deviations)
  - Annualized volatility from daily returns
  - Maximum drawdown over the loaded window
- Download loaded OHLC history as CSV
- Searchable ticker list and browser-session watchlist
- Indonesian / English interface
- Explicit demo labels for sample values and simulated forecasts

## Deploy on Vercel (required for historical API)

GitHub Pages only hosts static files and cannot execute the `api/stock.js` serverless function. To use the historical-data proxy:

1. Sign in to [Vercel](https://vercel.com/).
2. Choose **Add New → Project** and import `rouffadilah/stockvision-ai` from GitHub.
3. Set the framework preset to **Other** and root directory to `./`.
4. Deploy.
5. Test `https://YOUR-VERCEL-DOMAIN/api/stock?symbol=BBCA.JK&range=1mo&interval=1d`.

The API uses an unofficial Yahoo Finance endpoint. It may change, throttle, or become unavailable; review the provider's terms and use a licensed data provider for a commercial service.

## Run locally

Open `index.html` for the static/demo experience. The API route requires a compatible serverless host such as Vercel to work.

## Data integrity and limitations

- Sample cards and demo forecasts are illustrative and must not be interpreted as current market data.
- Technical metrics are calculated only after historical data successfully loads. They are descriptive indicators, not buy/sell recommendations.
- No trained machine-learning model, validated forecasting service, authenticated account system, or persistent cloud watchlist is connected yet.
- Before using the app commercially, connect a licensed data provider, implement server-side rate limits and monitoring, validate indicator calculations, and build any forecasting model with time-series/walk-forward validation and transparent uncertainty.
- Educational analytics only; not investment advice.

## Developer

Rouf Fadilah
