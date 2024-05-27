function populateList(buttons){
    console.info("Populating buttons")
    console.info(buttons)

    let target  = document.querySelector('#container');
    for(var x = 0; x < buttons.length; x++){
        let buttonDiv = document.createElement('li')
        buttonDiv.innerHTML = buttons[x].name;
        buttonDiv.className = 'flex-item button';

        target.append(buttonDiv);
    }
}
function connect(){
    
console.info("Requesting Serial port")


const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port.
// Access to the custom Bluetooth RFCOMM service above will be allowed.
const port = navigator.serial.requestPort({
allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
}

var serial = {};

(function(){
    'use strict';
    console.info("Starting Triggerboard.");
fetch('config.json')
  .then(response => response.json())
  .then(data => populateList(data.buttons))
  .catch(error => console.log(error));

})();



