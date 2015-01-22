var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powerSaving = true;
  this.savingOffMaxTemp = 32;
  this.savingOnMaxTemp = 25;
  this.powerSavingText = "PSM ON";
  this.tempColor = "yellow";
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
  (this.powerSaving && this.temperature > 25) ? this.temperature = 25 : this.temperature;

};

Thermostat.prototype.powerSavingOnOffText = function() {
  (this.powerSaving) ? this.powerSavingText = "PSM ON " : this.powerSavingText = "PSM OFF";
};

Thermostat.prototype.reset = function() {
  this.powerSaving = true;
  this.powerSavingText = "PSM ON "
  this.temperature = 20;
};

Thermostat.prototype.textColor = function() {
  if (this.temperature < 18) {
    return "low"
  } 
  else if (this.temperature > 25) {
    return "high"
  } 
  else {
    return "medium"
  }
};
