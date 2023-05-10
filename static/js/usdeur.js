$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function (data) {
    var usdRate = data.Valute.USD.Value.toFixed(2);
    var eurRate = data.Valute.EUR.Value.toFixed(2);
    $("#usd-rate").text(usdRate);
    $("#eur-rate").text(eurRate);
});
