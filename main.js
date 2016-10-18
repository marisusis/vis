'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;


//Handle all windows being closed
app.on('window-all-closed', function() {
	//Handle application closing on a darwin platform (macOS)
	if (process.platform != "darwin") {
		app.quit();
	}
})

//Once application is ready...
app.on('ready', function() {
	//Create main browser window
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		icon: `${__dirname}/icon.png`
	});
	//Load the main HTML file
	mainWindow.loadURL(`file://${__dirname}/app/index.html`)

	//When the main window is closed..
	mainWindow.on('closed', function() {
		//It no longer exists
		mainWindow = null;
	})
})
