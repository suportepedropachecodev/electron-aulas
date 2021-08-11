const { app , BrowserWindow } = require("electron");

function creatWindow(){
    const mainWindow = new BrowserWindow({
        width:800,
        height:600
    })
    mainWindow.loadURL("https://github.com/pedroalpacheco");
};

app.on('ready',()=>{
    creatWindow()
})