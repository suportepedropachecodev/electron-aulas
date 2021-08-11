const { app , BrowserWindow, Menu, MenuItem } = require("electron");

let mainWindow, secWindow;

let menuPrincipal = new Menu.buildFromTemplate(require('./menu'));

function creatWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        title:"APP de Electron"
        
        
    });
   
    mainWindow.loadFile('./index.html');
    Menu.setApplicationMenu(menuPrincipal);
    
};

app.on('ready',()=>{
    creatWindow()
    console.log('Inicando APP!')
})
app.on('quit',()=>{
    creatWindow()
    console.log('FECHANDO APP!')
})