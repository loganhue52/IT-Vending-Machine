
#resoure - https://www.geeksforgeeks.org/python-generate-qr-code-using-pyqrcode-module/

# Import QRCode from pyqrcode
import pyqrcode
#import png
from pyqrcode import QRCode
  
  
# String which represents the QR code
s = "https://docs.google.com/forms/d/1PRz1RRVyLP1_nqnyV17LPXj8BuN6GJ8WDmS3iy0tHG8/viewform?edit_requested=true"
  
# Generate QR code
url = pyqrcode.create(s)
  

# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)