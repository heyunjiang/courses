
var electron = require('electron');
var app = electron.app;
var BrowserWindow = require('browser-window');
var webContents = null;
var Tray = electron.Tray;
var Menu = electron.Menu;
var MenuItem = electron.MenuItem;
var nativeImage = electron.nativeImage;

var mainWindow = null;
var appIcon = null;

var template = [
    {
        label: '关于',
        submenu: [
            {
                label: '版本'
            },
            {
                label: '项目'
            }
        ]
    }
];

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

var buildMainWindow = function(){
    var electronScreen = electron.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    BrowserWindow.mainWindow = mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        useContentSize:true,
        resizable:true,
        maximizable:true,
        fullscreenable:true,
        titleBarStyle:"hidden",
        backgroundColor: "rgba(0,0,0,0.5)" });
    webContents = mainWindow.webContents;
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setSkipTaskbar(true);
    mainWindow.setAutoHideMenuBar(true);
    mainWindow.loadURL('file://' + __dirname + '/index.html');
}

var buildMenu = function(){
    var menu = Menu.buildFromTemplate(template);
    mainWindow.setMenu(menu);
}

var buildAppIcon = function(){
    appIcon = new Tray(nativeImage.createFromPath(__dirname+'/logo.ico'));
    appIcon.setToolTip('This is my application.');
    var contextMenu = Menu.buildFromTemplate([
        { label: '退出', click: function(){
            try {
                app.exit(0);
            } catch (f) {
                console.error(f)
            }
        } }
    ]);
    appIcon.setContextMenu(contextMenu);
}

var mainEvent = {};
mainEvent.appIcon = function(){
    appIcon.on('click',function(){
        if(mainWindow.isVisible()||mainWindow.isMinimized()||mainWindow.isFocused()){
            mainWindow.show();
        }
    });
}

mainEvent.mainWindow = function(){
    mainWindow.on('close', function (e) {
        e.preventDefault();
        mainWindow.minimize();
    });
    mainWindow.on('closed', function (e) {
        mainWindow = null;
    });
}


app.on('ready', function () {
    buildAppIcon();
    buildMainWindow();
    buildMenu();

    mainEvent.appIcon();
    mainEvent.mainWindow();
});
