# OpenBoard-whiteboard

<h1 align="center">
  Open Board
</h1>

# Description:
- The project comprises of basic openboard functionalities such as, writing, erasing, downloading the canvas, adding notes (with minimising it, closing it, dragging it around on the page), uploading the image (features same as of notes), undo and redo actions.
Added realtime drawing functionality using Socket.io by connecting to server using Express.js

# Adding notes and uploading image:
Using green button, we can minimise the notes and by clicking red button, notes can be closed. Similarly for uploading images.


# Realtime drawing:
Realtime drawing can be achieved by the people using same link at same time.

# 🚀 Technical Stack:
HTML
CSS
JavaScript
Express.js
Socket.io

## Frontend:
- Programming Language: Javascript
- Framework: Electron 
- Canvas 
- IDE: VScode

## Backend:
- socket.io

# Key Features
This real-time whiteboard provides the user with following features:

Draw using pencil (3 different colors, scale the pencil size)
Erase the drawn area using eraser(scale the eraser size)
Include a sticky note to make notes (feature to add multiple sticky notes, move sticky note around the drawing area, minimize and close the sticky note)
Upload an image or gif (feature to add multiple files,feature to move the file, close the file)
Download the drawing part on the user screen
Redo or undo the drawing content changes.
Zoom in or zoom out the drawing content.
Real-time virtual environment for drawing and erasing.

# Run on your local machine:
Replace https://real-time-openboard.herokuapp.com/ with http://localhost:3000/ in index.htmlfile.
Open the folder in VS code. Open terminal and write these commands:

npm init
Press Enter. Then,

npm install socket.io
npm install --save-dev nodemon
node app.js
Now open the browser and type localhost:3000.




