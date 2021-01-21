function checkfun() {
    var s1 = document.getElementById("vlsi").value;
    var s2 = document.getElementById("cns").value;
    var s3 = document.getElementById("rmt").value;
    var s4 = document.getElementById("epd").value;
    var s5 = document.getElementById("dip").value;
    var s6 = document.getElementById("mobile").value;
    var s7 = document.getElementById("bcs").value;
    var s8 = document.getElementById("wsn").value;
    var s9 = document.getElementById("plc").value;
    var s10 = document.getElementById("project").value;
    var totalm = document.getElementById("total");
    var percentage = document.getElementById("per");

    // if (((s1.length > 2)&&(s1.length<2))&&
    //     ((s2.length > 2)&&(s2.length<2))&&
    //     ((s3.length > 2)&&(s3.length<2))&&
    //     ((s4.length > 2)&&(s4.length<2))&&
    //     ((s5.length > 2)&&(s5.length<2))&&
    //     ((s6.length > 2)&&(s6.length<2))&&
    //     ((s7.length > 2)&&(s7.length<2))&&
    //     ((s8.length > 2)&&(s8.length<2))&&
    //     ((s9.length > 2)&&(s9.length<2))&&
    //     ((s10.length > 2)&&(s10.length<2))) 
    // {
    //     warning.innerHTML = "Enterd Marks Should be Valid"
    // }
    // else {
    var obtained = parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5) + parseInt(s6) + parseInt(s7) + parseInt(s8) + parseInt(s9) + parseInt(s10);
    var grade = (obtained / 10) / 8.80;

    totalm.innerHTML = obtained;
    per.innerHTML = ((obtained / 1000) * 100).toFixed(2) + " %";
    cgpa.innerHTML = grade.toFixed(2);

    switch ((Math.round(grade))) {
        case 10:
        case 9: cobtained.innerHTML = "Outstanding";
            break;
        case 8: cobtained.innerHTML = "Fisrt Class with Distinction";
            break;
        case 7: cobtained.innerHTML = "Fisrt Class";
            break;
        case 6: cobtained.innerHTML = "Higher Second Class";
            break;
        case 5: cobtained.innerHTML = "Second Class";
            break;
        case 4: cobtained.innerHTML = "Passed";
            break;
        case 3: 
        case 2:         
        case 1: cobtained.innerHTML = "Failed! Better Luck Next Time";
            break;
        default: cobtained.innerHTML = "Enter All marks for Details";

    }


}