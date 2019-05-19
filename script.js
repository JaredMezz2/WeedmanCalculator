function rowGen() {
    var val = document.getElementById("numRows").value;
    var tableRef = document.getElementById("houses");

    if (!isNaN(val)) {
        for (i=0;i < val-1;i++) {
            let newRow = tableRef.insertRow();
            var cloneRow = document.createElement("input");
            cloneRow.type = "number";
            cloneRow.id = "houseSize";
            newRow.appendChild(cloneRow);
        }
    }
}

function calculate() {
    var totalSize = 0;
    var sizes = document.querySelectorAll("#houseSize");

    sizes.forEach(size => {
        if (size.value !== "") {
            totalSize += parseFloat(size.value);
        }

    });

    alert (totalSize);
}