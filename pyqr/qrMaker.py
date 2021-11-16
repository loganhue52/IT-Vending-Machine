
#resoure - https://www.geeksforgeeks.org/python-generate-qr-code-using-pyqrcode-module/

# Import QRCode from pyqrcode
import pyqrcode
#import png
from pyqrcode import QRCode
  
  
# String which represents the QR code
s = "https://forms.gle/mMvyRh5TCdaJ3nD39"
  
# Generate QR code
url = pyqrcode.create(s)
  

# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)