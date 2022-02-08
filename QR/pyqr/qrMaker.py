
#resoure - https://www.geeksforgeeks.org/python-generate-qr-code-using-pyqrcode-module/

# Import QRCode from pyqrcode
import pyqrcode
#import png
from pyqrcode import QRCode
  
  
# String which represents the QR code
s = "shorturl.at/oS149"
  
# Generate QR code
url = pyqrcode.create(s)
  

# Create and save the png file naming "myqr.png"
url.png('AUXcordscale1.png', scale = 1)