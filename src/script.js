function generateTable(){
    let getNumber = Number (document.getElementById("writeNumOfTable").value);
    let countNumber = Number (document.getElementById("countTheNumber").value);
    let mathTable = "";
    for(let i = 1; i <= countNumber; i++){ // Start from 1 to countNumber
        mathTable += `<tr><td>${getNumber}</td><td>x</td><td>${i}</td><td>=</td><td>${getNumber * i}</td></tr>`;
    }
    document.getElementById("writeTable").innerHTML = mathTable;
    console.log(mathTable);
};
    
    
