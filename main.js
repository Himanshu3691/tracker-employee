
const { app, BrowserWindow} = require('electron') 

let mainWindow

// Create a new BrowserWindow when `app` is ready
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1200, height: 800,
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      // contextIsolation: false,
      nodeIntegration: true,
      contextIsolation:false
    },
    minWidth:1200,
    minHeight:150,
    // autoHideMenuBar: true,
    // show:false,
    // backgroundColor:'#2B2E3B'
  })
  // secondWin = new BrowserWindow({
  //   width: 600, height: 300,
  //   webPreferences: {
  //     nodeIntegration: true
  //   },
  //   parent:mainWindow,
  //   // modal:true,
  // })

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile('index.html')
  // secondWin.loadFile('secondary.html')


  // mainWindow.once('ready-to-show',mainWindow.show)
  // secondWin.once('ready-to-show',mainWindow.show)
  // Open DevTools - Remove for PRODUCTION!
// mainWindow.on('focus',()=>{
//   console.log("main is focus ")
// })
// secondWin.on('focus',()=>{
//   console.log("second is focus ")
// })

  // mainWindow.webContents.openDevTools();

  // Listen for window being closed
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
  // secondWin.on('closed',  () => {
  //   mainWindow = null
  // })
}

// Electron `app` is ready
app.on('ready', ()=>{
  console.log("App is ready!")
  createWindow()
  // console.log(app.getPath('desktop'))
  // console.log(app.getPath('music'))
  // console.log(app.getPath('temp'))
  // console.log(app.getPath('userData'))
})

// app.on('before-quit',e=>{
//   console.log('Prevent fron quitting')
//   e.preventDefault();
// })
// app.on('browser-window-blur',e=>{
//   console.log('App is blur')
  
// })
// app.on('browser-window-blur',e=>{
//   console.log('App is blur')
//   setTimeout(app.quit,3000)
  
// })
// app.on('browser-window-focus',e=>{
//   console.log('App is focused')
  
// })


// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
