function generateTable(){
    // Get Number of MathTable
    let getNumber = Number (document.getElementById("writeNumOfTable").value);
    // Get Number of TableCount
    let countNumber = Number (document.getElementById("countTheNumber").value);
    // Blank Variable
    let mathTable = "";
    // One in the loop is equal to or less than ten after condition true add the one number
    for(let i = 1; i <= countNumber; i++){ // Start from 1 to countNumber
        // Update the Blank Variable and add table row and table data, like complete table
        mathTable += `<tr><td>${getNumber}</td><td>x</td><td>${i}</td><td>=</td><td>${getNumber * i}</td></tr>`;
    }
    // Return the Value and Generate the MathTable
    document.getElementById("writeTable").innerHTML = mathTable;
    console.log(mathTable);
};
    
    
