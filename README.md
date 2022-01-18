# Using QRcodes to pre-load info in a Google Sheet


## Downloading Node JS and JS QRcode

Click this to go to the Node website --> [Node JS](https://nodejs.org/en/download/)

Click the installer you need for your system

![This is an image](https://github.com/loganhue52/IT-Vending-Machine/blob/d45abb1dcf312a3be5e50165e55e01c27ced12fb/Pics%20for%20readme/Screenshot%202021-11-30%20123816.png)

NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. So in other words Nodejs helps your computer terminal run a JavaScript file.

After that's is finished downloading open PowerShell and type:
1. npm init -y
2. mkdir "ProjectFolder"
3. cd "ProjectFolder"
4. nano app.js
5. npm install qrcode
## Getting a Google Form Ready

The Google Form is for when the QRCode is scanned it opens with pre-filled information in a new window

Create a --> [Google Form](https://docs.google.com/forms)

1. Open a blank google form

![This is an image](https://github.com/loganhue52/IT-Vending-Machine/blob/d45abb1dcf312a3be5e50165e55e01c27ced12fb/Pics%20for%20readme/Screenshot%202021-11-30%20122451.png)

2. Make your quiz

![This is an image](https://github.com/loganhue52/IT-Vending-Machine/blob/d45abb1dcf312a3be5e50165e55e01c27ced12fb/Pics%20for%20readme/Screenshot%202021-11-30%20123020.png)

3. Click on the three dots on the top right of the screen
4. Click "Get pre-filled link"

![This is an image](https://github.com/loganhue52/IT-Vending-Machine/blob/d45abb1dcf312a3be5e50165e55e01c27ced12fb/Pics%20for%20readme/Screenshot%202021-11-30%20123133.png)

5. Enter the information to be pre-filled
6. Then click the purple button that says Get link
7. then click "COPY LINK" that pops up in the bottom left

![This is an image](https://github.com/loganhue52/IT-Vending-Machine/blob/d45abb1dcf312a3be5e50165e55e01c27ced12fb/Pics%20for%20readme/Screenshot%202021-11-30%20123234.png)
# QRcode Generator In Two Language

On the Python QRcode Generator it takes the data you want to use and puts it in a QRcode, then places and saves that file in the project folder, but on the JavaScript QRCode Generator it takes the data you want to use the prints the QRcode in the terminal along with the url for the QRcode.

## Python QRCode Generator


1. Import pyqrcode
2. From pyqrcode import QRcode
```py
# Import QRCode from pyqrcode
import pyqrcode
#import png
from pyqrcode import QRCode
```
3. Create a string that will contain your data
4. Incorporate  the QR generator

```py
# Generate QR code
url = pyqrcode.create(data)
```
5. Create and save the png file of the QRcode

```py
# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)
```

### Fill code 

```py
# Import QRCode from pyqrcode
import pyqrcode
#import png
from pyqrcode import QRCode
  
  
# String which represents the QR code
data = "Insert link from google from here"
  
# Generate QR code
url = pyqrcode.create(data)
  

# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)
```

## JavaScript QRCode Generator

1. require the Qrcode package
```js
// Require the package
const QRCode = require('qrcode')
```
2. Setting up the data
```js
// Creating the data
let website = "Insert link from google from here"
let data = website
console.log(data)
```
3. Print the QRcode to the terminal
```js
// Print the QR code to terminal
QRCode.toString(data,{type:'terminal'},
					function (err, QRcode) {
	if(err) return console.log("error occurred")

	// Printing the generated code
	console.log(QRcode)
})
```
4. Convert and print the QRcode into base64
```js
// Converting the data into base64
QRCode.toDataURL(data, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code
	console.log(code)
})
```


### Fill code 

```js
// Require the package
const QRCode = require('qrcode')

// Creating the data
let website = "Input Your Data Here"
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

```



# Sources

Dummies - [How to set up autofill in google chrome](https://www.dummies.com/education/internet-basics/how-to-set-up-autofill-in-google-chrome/)

GeeksForGeeks - [python generate qr code](https://www.geeksforgeeks.org/python-generate-qr-code-using-pyqrcode-module/)



  

  

