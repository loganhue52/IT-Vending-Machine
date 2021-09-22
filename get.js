  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBQRXfJ6qE_euNFGDx3ppCmQJKWhdi4SyE",
    authDomain: "it-closet.firebaseapp.com",
    databaseURL: "https://it-closet-default-rtdb.firebaseio.com",
    projectId: "it-closet",
    storageBucket: "it-closet.appspot.com",
    messagingSenderId: "935774822996",
    appId: "1:935774822996:web:242ef61a79ac4e536b43c1",
    measurementId: "G-KFRD3P1K68"
};
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var database = firebase.database();

var listy = new Array();

var objList = new Array();

database.ref("Items").on('value', (snapshot) => {
    const data = snapshot.val();
    var items = Object.values(data);
    listy.push(Object.keys(items).map((key) => [items[key]]));
    for(let k in listy){
        for (let j in listy[k]){
            for (let l in listy[k][j]){
                objList.push(Object.values(listy[k][j][l]));
            }
        }
    }
    //when objList is printed within the arrow function, it returns what I need
    //when it is printed outside of the function it returns as a list with the attributes of the objects
    console.log(objList);
});

console.log(objList);


var table = "<table>";
// console.log(listy.length);
// listy.forEach(element => console.log(element));
// console.log(listy[0]);

for (var rowIndex=0; rowIndex < listy.length; rowIndex++) {
    var row = "<tr><td>#" + rowIndex + "</td>";
    console.log("anything");
    for(var colIndex = 0; colIndex < 4; colIndex++) {
        var x = listy[rowIndex][colIndex];
        row += "<td>" + x + "</td>";
        console.log("something");
    }
    table += row + "</tr>";
}

// console.log(table);

// document.getElementById("output").innerHTML = table + "</table>"; 
