
var app = {

    initialize: function () {
        this.bindEvents();
    },

    bindEvents: function() {
         document.addEventListener('deviceready', this.onDeviceReady, false);
    },
     onDeviceReady: function() {
        
        document.getElementById("cordova").innerHTML = device.cordova;
        document.getElementById("model").innerHTML = device.model;
        document.getElementById("platform").innerHTML = device.platform;
        document.getElementById("version").innerHTML = device.version;
        document.getElementById("manufacturer").innerHTML = device.manufacturer;
        document.getElementById("isVirtual").innerHTML = device.isVirtual;
    };
      onDeviceReady: function() {
        app.receivedEvent('batery');
    },
    receivedEvent: function(id) {
    window.addEventListener("batterystatus", onBatteryStatus, false);
    function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
    document.getElementById("level").innerHTML = status.level;
    document.getElementById("isPlugged").innerHTML = status.isPlugged;
    };
    
capturePhoto: function(){

        navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: true 
        });

        function onSuccess(imageData) {
            var image = document.getElementById('minhaImagem');
            image.style.display = "block";
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

    };
app.initialize();