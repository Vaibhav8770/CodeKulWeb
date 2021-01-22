function order() {
    var gorder = [
        "Cappaccino",
        "Americano",
        "Affogato",
        "IrishCoffee",
        "FlatWhite",
        "ColdCoffee",
        "FreakShake",
    ];
    var inp1 = document.getElementById("order").value;
    var a = 0;
    var gst = cgst.innerHTML = "CGST:" + "  " + "09%";
    sgst.innerHTML = "SGST:" + "  " + "09%";
    switch (inp1) {
        case "Cappaccino":
            document.getElementById("billim").style.display = "block";
            yourorder.innerHTML = "Ur Order:105₹";
            gst;
            a = 105 * 0.18 + 105;
            total.innerHTML = "Total: " + a.toFixed(2);
            break;

        case "Americano":
            document.getElementById("billim").style.display = "block";
            yourorder.innerHTML = "Ur Order:85₹";
            gst;
            a = 85 + 85 * 0.18;
            total.innerHTML = "Total: " + a.toFixed(2);
            break;

        case "Affogato":
            document.getElementById("billim").style.display = "block";
            yourorder.innerHTML = "Ur Order:175₹";
            gst;
            a = 175 + 175 * 0.18;
            total.innerHTML = "Total: " + a.toFixed(2);
            break;

        case "IrishCoffee":
            document.getElementById("billim").style.display = "block";
            yourorder.innerHTML = "Ur Order:120₹";
            gst;
            a = 120 + 120 * 0.18;
            total.innerHTML = "Total: " + a.toFixed(2);
            break;

        case "FlatWhite":
            document.getElementById("billim").style.display = "block";
            yourorder.innerHTML = "Ur Order:150₹";
            gst;
            a = 150 + 150 * 0.18;
            total.innerHTML = "Total: " + a.toFixed(2);
            break;

        case "ColdCoffee":
            document.getElementById("billim").style.display = "block";
            yourorder.innerHTML = "Ur Order:135₹";
            gst;
            a = 135 + 135 * 0.18;
            total.innerHTML = "Total: " + a.toFixed(2);
            break;

        case "FreakShake":
            document.getElementById("billim").style.display = "block";
            yourorder.innerHTML = "Ur Order:350₹";
            gst;
            a = 350 + 350 * 0.18;
            total.innerHTML = "Total: " + a.toFixed(2);
            break;

        default:
            document.getElementById("billim").style.display = "block";
            fromabove.innerHTML = "Please Order<br><br>From above..";
    }
}