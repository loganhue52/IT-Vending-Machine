// Require the package
const QRCode = require('qrcode')

// Creating the data
let website = "https://docs.google.com/forms/d/e/1FAIpQLSfYzGHDtafCUIET58TOIOT8l7bnKdnWnDhae5rmWol6WFZAnQ/viewform?usp=pp_url&entry.1252295625=cs&entry.1878835824=tuesday"
let data = website
console.log(data)


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
