export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const symbol = String(req.query.symbol || "").trim();
  const range = String(req.query.range || "1mo");
  const interval = String(req.query.interval || "1d");
  const allowedRanges = new Set(["1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y"]);
  const allowedIntervals = new Set(["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1wk", "1mo", "3mo"]);
  if (!/^[A-Za-z0-9.^=-]{1,24}$/.test(symbol) || !allowedRanges.has(range) || !allowedIntervals.has(interval)) {
    return res.status(400).json({ error: "Invalid symbol or chart parameters" });
  }
  try {
    const url = new URL("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(symbol));
    url.searchParams.set("range", range);
    url.searchParams.set("interval", interval);
    const upstream = await fetch(url.toString(), { headers: { "Accept": "application/json" } });
    if (!upstream.ok) return res.status(502).json({ error: "Market data provider returned HTTP " + upstream.status });
    const payload = await upstream.json();
    if (payload.chart?.error) return res.status(502).json({ error: payload.chart.error.description || "Market data provider error" });
    const result = payload.chart?.result?.[0];
    if (!result) return res.status(404).json({ error: "No historical data found for this symbol" });
    return res.status(200).json(payload);
  } catch (error) {
    return res.status(502).json({ error: "Unable to retrieve historical market data" });
  }
}
