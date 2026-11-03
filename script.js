
function showMessage() {
    alert("Traffic data refreshed successfully!");

    let vehicles = document.getElementById("vehicles");

    let count = Math.floor(Math.random() * 500) + 1000;

    vehicles.innerHTML = count;
}

