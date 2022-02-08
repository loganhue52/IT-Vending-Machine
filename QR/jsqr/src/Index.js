
//resoure - https://www.geeksforgeeks.org/generate-a-qr-code-in-node-js/

// Require the package
const QRCode = require('qrcode')

// Creating the data
let data = "https://docs.google.com/forms/d/e/1FAIpQLSfYzGHDtafCUIET58TOIOT8l7bnKdnWnDhae5rmWol6WFZAnQ/viewform?usp=pp_url&entry.2098910404=i&entry.1252295625=j&entry.1878835824=Male+to+Male&entry.1169761249=Adapters&entry.1586073499=Welding"
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
