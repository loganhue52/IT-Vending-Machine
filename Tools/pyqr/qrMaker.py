
filename="EquipmentSheetsDB.csv"

file=open(filename,"r")
ITURL=[]
text_file = open("urls.txt", "w")
for line in file:
  name,polarity,trash=line.split(",",2)
  print( name,polarity)
  ITurl="https://docs.google.com/forms/d/e/1FAIpQLSfYzGHDtafCUIET58TOIOT8l7bnKdnWnDhae5rmWol6WFZAnQ/viewform?usp=pp_url&entry.2098910404="+name+"&entry.1252295625=N/A&entry.1878835824="+polarity+"&entry.1169761249=Adapters&entry.1586073499=Welding"
  ITURL.append(ITurl.replace(" ","+"))
for i in range(len(ITURL)):
  
  n = text_file.write(ITURL[i]+"\n")

text_file.close()

#resoure - https://www.geeksforgeeks.org/python-generate-qr-code-using-pyqrcode-module/

# Import QRCode from pyqrcode

import pyqrcode
#import png
from pyqrcode import QRCode
urls=open("urls.txt","r")


for line in urls:
  # String which represents the QR code
  filelines = line.replace("\n","")
  itemUrl = filelines
  print(filelines)
  spliter=filelines.split("2098910404")[1]
  name = spliter.split("&")[0]
  name=name[1:]
  

  # Generate QR code
  url = pyqrcode.create(itemUrl)
  
  # Create and save the png file naming "myqr.png"
  url.png(name+'.png', scale = 1)
urls.close()
"""
# Import QRCode from pyqrcode
import pyqrcode
#import png
from pyqrcode import QRCode
  
  
# String which represents the QR code
data = ""
  
# Generate QR code
url = pyqrcode.create(data)
  

# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 1)"""