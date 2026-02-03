import { useEffect } from "react";

function Liquidity() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "600",
      colorTheme: "dark",
      currencies: [
        "EUR",
        "USD",
        "GBP",
        "JPY",
        "AUD",
        "CAD",
        "CHF",
        "NZD"
      ],
      locale: "en",
      isTransparent: false
    });

    document.getElementById("tv-heatmap").appendChild(script);
  }, []);

  return (
    <div className="page">
      <h2>LIQUIDITY & FOREX HEATMAP (LIVE)</h2>

      <div
        id="tv-heatmap"
        style={{
          marginTop: "20px",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      ></div>
    </div>
  );
}

export default Liquidity;
