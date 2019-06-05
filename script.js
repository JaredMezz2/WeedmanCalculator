function rowGen() {
    const val = document.getElementById("numRows").value;
    const tableRef = document.getElementById("houses");

    if (!isNaN(val)) {
        for (i=0;i < val-1;i++) {
            let newRow = tableRef.insertRow();
            const cloneRow = document.createElement("input");
            cloneRow.type = "number";
            cloneRow.id = "houseSize";
            newRow.appendChild(cloneRow);
        }
    }
}

function calculate() {
    var totalSize = 0;
    var totalProfit = 0;
    const sizes = document.querySelectorAll("#houseSize");

    sizes.forEach(size => {
        if (size.value !== "") {
            totalSize += parseFloat(size.value);

            // profit calc for weed spray, 7%
            totalProfit += weedDict[parseFloat(size.value)] / 1.13 * 0.07;
        }
    });

    document.getElementById("houseSize").focus();
    // # of jobs , total size of houses, total profit from houses
    return [sizes.length, totalSize, totalProfit.toFixed(2)];
}

function finished() {
    document.querySelector(".jobSelection").style.display = "none";
    document.querySelector(".outputInfo").style.display = "block";

    const totals = calculate();
    document.querySelector(".jobTotal").innerHTML = totals[0];
    document.querySelector(".sizeTotal").innerHTML = totals[1];
    document.querySelector(".profitTotal").innerHTML = totals[2];

    const dayMessage = document.querySelector(".dayMessage");

    if (totals[2] > 145) {dayMessage.innerHTML = "Be quick as heck!"}
    else {dayMessage.innerHTML = "Slow day my guy."}

    // dbsubmit doesnt work yet.
    // dbSubmit();
}

function back() {
    document.querySelector(".outputInfo").style.display = "none";
    document.querySelector(".jobSelection").style.display = "block";
}

// isnt currently working, php file may not be running?
function dbSubmit(){
    var x = new XMLHttpRequest();
    x.open("GET", "dbConn.php", true);
    x.send();
    return false;
}

// all pre tax & percentage
var weedDict = {
    .5: 60,
    1.5: 71,
    2.5: 77,
    3.5: 81,
    4.5: 88,
    5.5: 94,
    6.5: 100,
    7.5: 107,
    8.5: 113,
    9.5: 116,
    10.5: 122,
    11.5: 128,
    12.5: 133,
    13.5: 139,
    14.5: 0,
    15.5: 0,
    16.5: 0,
    17.5: 0,
    18.5: 0,
    19.5: 181,
    20.5: 185,
    21.5: 191,
    22.5: 0,
    23.5: 0,
    24.5: 208,
    25.5: 0,
    26.5: 222,
    58.5: 407,
};

var fertDict = {
    .5: 47,
    1.5: 52,
    2.5: 59,
    3.5: 63,
    4.5: 69,
    5.5: 74,
    6.5: 76,
    7.5: 83,
    8.5: 0,
    9.5: 89,
    10.5: 0,
    11.5: 0,
    12.5: 101,
    13.5: 0,
    14.5: 0,
    15.5: 0,
    16.5: 0,
    17.5: 0,
    18.5: 0,
    19.5: 131,
    20.5: 134,
    21.5: 0,
    22.5: 0,
    23.5: 0,
    24.5: 150,
    25.5: 0,
    26.5: 0,
    58.5: 0,
};