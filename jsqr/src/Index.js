
//resoure - https://www.geeksforgeeks.org/generate-a-qr-code-in-node-js/

// Require the package
const QRCode = require('qrcode')

// Creating the data
let data = "file:///C:/Users/padawan/Documents/IT-Vending-Machine/experment/basicwebsit.html/?name='kevin'&age='17'"
//let data = "fire Base website"

// Converting the data into String format
//let stringdata = JSON.stringify(data)

// Print the QR code to terminal
QRCode.toString(data,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	// Printing the generated code
	console.log(QRcode)
})

// Converting the data into base64
QRCode.toDataURL(data, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code
	console.log(code)
})
