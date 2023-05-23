function convertLength() {
    // Get the input value and selected unit
    var lengthValue = document.getElementById('lengthValue').value;
    var lengthUnit = document.getElementById('lengthUnitSelect').value;
  
    // Convert the value based on the selected unit
    var convertedValue;
    switch (lengthUnit) {
      case 'meters':
        convertedValue = lengthValue;
        break;
      case 'kilometers':
        convertedValue = lengthValue * 0.001;
        break;
      case 'centimeters':
        convertedValue = lengthValue * 100;
        break;
      case 'millimeters':
        convertedValue = lengthValue * 1000;
        break;
      case 'miles':
        convertedValue = lengthValue * 0.000621371;
        break;
      case 'yards':
        convertedValue = lengthValue * 1.09361;
        break;
      case 'feet':
        convertedValue = lengthValue * 3.28084;
        break;
      case 'inches':
        convertedValue = lengthValue * 39.3701;
        break;
      case 'lightyears':
        convertedValue = lengthValue * 9.461e+15;
        break;
      default:
        convertedValue = '';
        break;
    }
  
    // Display the converted value
    document.getElementById('lengthOutputValue').textContent = convertedValue;
  }
  
  function convertTemperature() {
    // Get the input value and selected unit
    var tempValue = document.getElementById('tempValue').value;
    var tempUnit = document.getElementById('tempUnitSelect').value;
  
    // Convert the value based on the selected unit
    var convertedValue;
    switch (tempUnit) {
      case 'celsius':
        convertedValue = tempValue;
        break;
      case 'kelvin':
        convertedValue = parseFloat(tempValue) + 273.15;
        break;
      case 'fahrenheit':
        convertedValue = (parseFloat(tempValue) * 9 / 5) + 32;
        break;
      default:
        convertedValue = '';
        break;
    }
  
    // Display the converted value
    document.getElementById('tempOutputValue').textContent = convertedValue;
  }
  
  function convertArea() {
    // Get the input value and selected unit
    var areaValue = document.getElementById('areaValue').value;
    var areaUnit = document.getElementById('areaUnitSelect').value;
  
    // Convert the value based on the selected unit
    var convertedValue;
    switch (areaUnit) {
      case 'squaremeters':
        convertedValue = areaValue;
        break;
      case 'squarekilometers':
        convertedValue = areaValue * 1e+6;
        break;
        case 'squarefeet':
        convertedValue = areaValue * 10.7639;
        break;
        case 'squareinches':
        convertedValue = areaValue * 1550.0031;
        break;
        case 'hectares':
        convertedValue = areaValue * 10000;
        break;
        case 'acres':
        convertedValue = areaValue * 4046.85642;
        break;
        default:
        convertedValue = '';
        break;
        }
        
        // Display the converted value
        document.getElementById('areaOutputValue').textContent = convertedValue;
        }
        
        function convertTime() {
        // Get the input value and selected unit
        var timeValue = document.getElementById('timeValue').value;
        var timeUnit = document.getElementById('timeUnitSelect').value;
        
        // Convert the value based on the selected unit
        var convertedValue;
        switch (timeUnit) {
        case 'seconds':
        convertedValue = timeValue;
        break;
        case 'minutes':
        convertedValue = timeValue * 60;
        break;
        case 'hours':
        convertedValue = timeValue * 3600;
        break;
        case 'days':
        convertedValue = timeValue * 86400;
        break;
        default:
        convertedValue = '';
        break;
        }
        
        // Display the converted value
        document.getElementById('timeOutputValue').textContent = convertedValue;
        }
  