const button = document.getElementById("textButton");
var tableData = document.getElementById("infoTable");
let players = []

function addData(){ 
    console.log(players)
    var data1 = document.getElementById("Text1");
    var data2 = document.getElementById("Text2");
    var data3 = document.querySelector("#Text3");
    if(data1.value.trim().length === 0 || data2.value.trim().length === 0||  data3.value === null){
        alert("Ensure all fields are filled before submitting");
        return false;
    }
    else if(players.includes(data1.value)){
        /* This is not working currently, but the logic is to check if the number already exists, if so it prompts to enter a new number */
        alert("Someone has chosen this player number, please choose again");
        data1.value = null;
        return false;
    }
    else if(data1.value < 1){/* Ensures only positive numbers for player no. */
        alert("Please choose a positive number");
        data1.value = null;
        return false;
    }
    else{
        /*creates html string for data */
        var newRow = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");

        cell1.innerHTML = data1.value;
        cell2.innerHTML = data2.value;
        cell3.innerHTML = data3.value;
        /*adds row to table */
        newRow.append(cell1,cell2,cell3);
        document.getElementById("rows").appendChild(newRow);
        data1.value = null;
        data2.value = null;
        data3.value = null;
        alert("Entry successful!");
    }
    console.log(players)
}

function styleChange(){
    /*changes the table style */
    var styleSelected = document.querySelector("#table_style")
    console.log(table_style.value)
    var table = document.getElementById("infoTable")
    table.className='table '
    table.className+=table_style.value
}

function loadPage(){
    /* populates pre-set torunament entries */
    let users =
        [
            {
                id: 1,
                name: "John Doe",
                email: "U15"
            },
            {
                id: 2,
                name: "Alice Johnson",
                email: "U13"
            },
            {
                id: 3,
                name: "Bob Smith",
                email: "U18"
            },
            {
                id: 4,
                name: "Jane Wilson",
                email: "U17"
            },
            {
                id: 5,
                name: "ShuttleMan",
                email: "U17"
            },
            {
                id: 6,
                name: "karate",
                email: "U17"
            },
            {
                id: 7,
                name: "kim",
                email: "U18"
            },
            {
                id: 8,
                name: "sharkbot Wilson",
                email: "U18"
            },  
            {
                id: 9,
                name: "Jane Wilson",
                email: "U13"
            } 
        ]
        var tableData=document.getElementById("infoTable");
        var rowData='';
        
        users.forEach(Object => {
            rowData += '<tr>';
            rowData += '<td>'+Object.id+'</td>';
            rowData += '<td>'+Object.name+'</td>';
            rowData += '<td>'+Object.email+'</td>';
            rowData += '</tr>';
            players.push(Object.id)
            
        })
        tableData.insertAdjacentHTML('beforeend', rowData);
}
