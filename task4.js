function ElectricalAppliance(name) {
    this.device = 'Electrical appliance',
    this.name = name,
    this.status = 'turn off'
}
  
ElectricalAppliance.prototype.changeDeviceStatus = function() {
    if (this.status == 'turn on') {
        this.status = 'turn off';
    } else {
        this.status = 'turn on';
    }
}
   
function Gadgets(name, screenDiagonal, updateFrequency, power) {
    this.name = name,
    this.screenDiagonal = screenDiagonal,
    this.updateFrequency = updateFrequency,
    this.power = power
    this.getInfo = function() {
        console.log(`Name: ${this.name}\nDevice: ${this.device}\nScreenDiagonal: ${this.screenDiagonal}\nUpdate frequency: ${this.updateFrequency}\nPower: ${this.power}\nStatus: ${this.status}`);
    }
}
  
function Lighting(name, lampType, light, power) {
    this.name = name,
    this.lampType = lampType,
    this.light = light,
    this.power = power
    this.getInfo = function() {
        console.log(`Name: ${this.name}\nDevice: ${this.device}\nLamp type: ${this.lampType}\nLight: ${this.light}\nPower: ${this.power}\nStatus: ${this.status}`);
    }
}
  
Gadgets.prototype = new ElectricalAppliance();
Lighting.prototype = new ElectricalAppliance();
  
const computer = new Gadgets('Computer', 20, 144, 80);
const deskLamp = new Lighting('Desk lamp', 'incandescent', 'natural', 60);
  
function getGeneralPower(device1, device2) {
    let generalPower = 0;
    if (device1.status === 'turn on') {
        generalPower += device1.power;
    }
    if (device2.status === 'turn on') {
        generalPower += device2.power;
    }
    console.log(`Total power consumption: ${generalPower}`);
}  
  
computer.changeDeviceStatus();
deskLamp.changeDeviceStatus();
  
computer.getInfo();
deskLamp.getInfo();

getGeneralPower(computer, deskLamp);