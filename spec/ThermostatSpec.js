describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('by default', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('minimum temperature is 10 degrees', function() {
      expect(thermostat.minimumTemp).toEqual(10);
    });
  });

  describe('changing temperature', function() {

    it('can increase', function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease', function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it('should not go under 10 degrees', function() {
      thermostat.decreaseTemperature(11);
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('toggle button', function() {

    it('should change the savingPower status from true to false', function() {
      expect(thermostat.powerSaving).toBe(true);
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toBe(false);
    });

    it('should change the savingPower status from true to false and to true again', function() {
      expect(thermostat.powerSaving).toBe(true);
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toBe(false);
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toBe(true);
    });

  });

  describe('power saving mode', function() {

    it('should be on by default', function() {
      expect(thermostat.powerSaving).toBe(true);
    });

    it('max temperature should be 32 degrees when powerSaving off', function() {
      expect(thermostat.powerSaving).toBe(true);
      thermostat.powerSavingToggle();
      thermostat.increaseTemperature(15);
      expect(thermostat.temperature).toEqual(32);
    });

    it('max temperature should be 25 degrees when powerSaving on', function() {
      expect(thermostat.powerSaving).toBe(true);
      thermostat.increaseTemperature(15);
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('the reset button', function() {

    it('should set the temperature to 20', function() {
      thermostat.increaseTemperature(5);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('the color status', function() {

    it('should be green if the temperature is < 18', function(){
      thermostat.decreaseTemperature(3);
      expect(thermostat.colorStatus()).toEqual('green');
    });

    it('should be yellow if the temperature is inbetween 18 and 25', function(){
      expect(thermostat.temperature).toEqual(20);
      expect(thermostat.colorStatus()).toEqual('yellow');
    });

    it('should be red if the temperature is > 25', function(){
      thermostat.powerSavingToggle();
      thermostat.increaseTemperature(6);
      expect(thermostat.colorStatus()).toEqual('red');
    });

  });
});
