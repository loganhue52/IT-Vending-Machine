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


function getValues(db){
    // to make value list
        // make a list
        // take snapshot
        // for loop through snapshot to add them to a list
    var listy = [];
    db.ref().on("value", function(snapshot) {
    for (var i=0; i< /* continue */){
        //continue
    }
    }, function (error) {
    console.log("Error: " + error.code);
    });
}

var valList = getValues(database);

/* 

var table = "<table>";

for (var rowIndex=0; rowIndex <= n; rowIndex++) {
  var row = "<tr><td>#" + rowIndex + "</td>";
  for(var colIndex = 0; colIndex < 4; colIndex++) {
      row += "<td>" + demoList[rowIndex][colIndex] + "</td>";
  }
  table += row + "</tr>";
}
document.getElementById("output").innerHTML = table + "</table>"; 
*/