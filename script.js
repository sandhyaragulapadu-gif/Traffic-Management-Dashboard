let mode = "demo";

let routes = [
    {name: "Central Road", vehicles: 420},
    {name: "Airport Road", vehicles: 315},
    {name: "Market Street", vehicles: 280},
    {name: "Ring Road", vehicles: 233}
];

function setMode(selectedMode) {
    mode = selectedMode;

    document.getElementById("modeStatus").innerHTML =
        "Current Mode: " + mode.toUpperCase();

    if (mode === "demo") {
        document.getElementById("connection").innerHTML =
            "Demo data active";
        showMessage();
    } else {
        document.getElementById("connection").innerHTML =
            "Live API not connected. Configure API to receive actual traffic data.";
    }
}

function showMessage() {

    if (mode === "live") {
        alert("Live API is not connected yet!");
        return;
    }

    let total = 0;
    let high = 0;

    routes.forEach(route => {
        route.vehicles = Math.floor(Math.random() * 400) + 100;

        total += route.vehicles;

        if (route.vehicles >= 350) {
            high++;
        }
    });

    document.getElementById("vehicles").innerHTML = total;
    document.getElementById("highTraffic").innerHTML = high;

    let table = "";

    routes.forEach((route, index) => {

        let status = "Low";
        let signal = "🟢 Green";
        let color = "low";

        if (route.vehicles >= 350) {
            status = "High";
            signal = "🔴 Red";
            color = "high";
        } else if (route.vehicles >= 200) {
            status = "Medium";
            signal = "🟡 Yellow";
            color = "medium";
        }

        table += `
        <tr>
            <td>${route.name}</td>
            <td>${route.vehicles}</td>
            <td class="${color}">${status}</td>
            <td>${signal}</td>
        </tr>`;

        document.getElementById("signal" + (index + 1)).innerHTML = signal;
    });

    document.getElementById("routeData").innerHTML = table;

    document.getElementById("congestion").innerHTML =
        high >= 2 ? "High" : high === 1 ? "Medium" : "Low";

    document.getElementById("alerts").innerHTML =
        high > 0 ? high + " routes have high traffic!" :
        "All routes have normal traffic.";

    document.getElementById("updated").innerHTML =
        "Last updated: " + new Date().toLocaleTimeString();
}

showMessage();

setInterval(() => {
    if (mode === "demo") {
        showMessage();
    }
}, 5000);
