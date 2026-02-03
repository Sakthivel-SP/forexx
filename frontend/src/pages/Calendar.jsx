import { useEffect } from "react";

function Calendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      isTransparent: false,
      width: "100%",
      height: "600",
      locale: "en",
      importanceFilter: "0,1,2",
      currencyFilter: "USD,EUR,GBP,JPY,AUD,CAD,CHF,NZD"
    });

    document.getElementById("tv-calendar").appendChild(script);
  }, []);

  return (
    <div className="page">
      <h2>ECONOMIC CALENDAR (LIVE)</h2>

      <div
        id="tv-calendar"
        style={{
          marginTop: "20px",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      ></div>
    </div>
  );
}

export default Calendar;
1