var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powerSaving = true;
  this.savingOffMaxTemp = 32;
  this.savingOnMaxTemp = 25;
  this.powerSavingText = "ON";
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  if (((this.temperature + changeTempBy) > this.savingOnMaxTemp) && this.powerSaving){
    return this.temperature = this.savingOnMaxTemp;
  }
  else if (((this.temperature + changeTempBy) > this.savingOffMaxTemp) && this.powerSaving === false) {
    return this.temperature = this.savingOffMaxTemp;
  }
  else {
    return this.temperature += changeTempBy;
  };
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  if ((this.temperature - changeTempBy) < this.minimumTemp) {
    return this.temperature = this.minimumTemp;
  }
  else {
    return this.temperature -= changeTempBy;
  };
};

Thermostat.prototype.powerSavingToggle = function() {
  (this.powerSaving) ? this.powerSaving = false : this.powerSaving = true;
  (this.powerSaving && this.temperature >= 26) ? this.temperature = 25 : this.temperature;

};

Thermostat.prototype.powerSavingOnOffText = function() {
  (this.powerSaving) ? this.powerSavingText = "ON" : this.powerSavingText = "OFF";
};

Thermostat.prototype.reset = function() {
  this.powerSaving = true;
  this.powerSavingText = "ON"
  this.temperature = 20;
};

Thermostat.prototype.colorStatus = function() {
  if (this.temperature < 18) {
    return "green"
  }
  else if (this.temperature > 25) {
    return "red"
  }
  else {
    return "yellow"
  }
};
