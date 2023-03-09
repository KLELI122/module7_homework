class ElectricalAppliance {
    constructor(name) {
    this.device = 'Electrical appliance';
    this.name = name;
    this.status = 'turn off';
    }
    
    changeDeviceStatus(){
        if (this.status == 'turn on') {
            this.status = 'turn off';
        } else {
            this.status = 'turn on';
        }
    }
}
  
class Gadgets extends ElectricalAppliance {
    constructor(name, screenDiagonal, updateFrequency, power){
        super(name);
        this.screenDiagonal = screenDiagonal;
        this.updateFrequency = updateFrequency;
        this.power = power;
    }	

    getInfo() {
        console.log(`Name: ${this.name}\nDevice: ${this.device}\nScreenDiagonal: ${this.screenDiagonal}\nUpdate frequency: ${this.updateFrequency}\nPower: ${this.power}\nStatus: ${this.status}`);
    }
}
   
class Lighting extends ElectricalAppliance {
    constructor(name, lampType, light, power){
        super(name);
        this.lampType = lampType;
        this.light = light;
        this.power = power;
    }	
    
    getInfo() {
        console.log(`Name: ${this.name}\nDevice: ${this.device}\nLamp type: ${this.lampType}\nLight: ${this.light}\nPower: ${this.power}\nStatus: ${this.status}`);
    }
}  
      
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