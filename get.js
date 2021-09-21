  
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

database.ref("Items").on('value', (snapshot) => {
    const data = snapshot.val();
    var items = Object.values(data);
    for(let k in items){
        let i = Object.values(items[k]);
        listy.push(i);
        // console.log(Object.values(items[k]));
        // For some reason, the array returns as empty even though it is not
    }
    
});

console.log(listy);

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
