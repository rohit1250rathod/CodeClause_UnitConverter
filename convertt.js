function getlenunit() {
  let input = document.getElementById("length");
  let result = document.getElementById("result");
  let inputtype = document.getElementById("len1");
  let resulttype = document.getElementById("len2");
  input.addEventListener("keyup", myResult);
  inputtype.addEventListener("change", myResult);
  resulttype.addEventListener("change", myResult);
  inputtypeval = inputtype.value;
  resulttypeval = resulttype.value;
  function myResult() {
    inputtypeval = inputtype.value;
    resulttypeval = resulttype.value;
    if (inputtypeval === "meter") {
      if (resulttypeval === "kilometer")
        result.value = Number(input.value) * 0.001;
      else if (resulttypeval === "centimeter")
        result.value = Number(input.value) * 0.01;
      else if (resulttypeval === "millimeter")
        result.value = Number(input.value) * 1000;
      else if (resulttypeval === "foot")
        result.value = Number(input.value) * 0.328084;
      else if (resulttypeval === "inches")
        result.value = Number(input.value) * 39.37;
      else if (resulttypeval === "miles")
        result.value = Number(input.value) * 0.000621;
      else result.value = Number(input.value);
    } else if (inputtypeval === "kilometer") {
      if (resulttypeval === "kilometer") result.value = Number(input.value);
      else if (resulttypeval === "centimeter")
        result.value = Number(input.value) * 100000;
      else if (resulttypeval === "millimeter")
        result.value = Number(input.value) * 1000000;
      else if (resulttypeval === "meter")
        result.value = Number(input.value) * 1000;
      else if (resulttypeval === "foot")
        result.value = Number(input.value) * 3280.84;
      else if (resulttypeval === "inches")
        result.value = Number(input.value) * 39370.079;
      else if (resulttypeval === "miles")
        result.value = Number(input.value) * 0.621;
    } else if (inputtypeval === "millimeter") {
      if (resulttypeval === "kilometer")
        result.value = Number(input.value) * 0.0000001;
      else if (resulttypeval === "centimeter")
        result.value = Number(input.value) * 0.1;
      else if (resulttypeval === "millimeter")
        result.value = Number(input.value);
      else if (resulttypeval === "meter")
        result.value = Number(input.value) * 0.001;
      else if (resulttypeval === "foot")
        result.value = Number(input.value) * 0.00328084;
      else if (resulttypeval === "inches")
        result.value = Number(input.value) * 0.0394;
      else if (resulttypeval === "miles")
        result.value = Number(input.value) * 0.000000621;
    } else if (inputtypeval === "centimeter") {
      if (resulttypeval === "kilometer")
        result.value = Number(input.value) * 0.000001;
      else if (resulttypeval === "centimeter")
        result.value = Number(input.value);
      else if (resulttypeval === "millimeter")
        result.value = Number(input.value) * 10;
      else if (resulttypeval === "meter")
        result.value = Number(input.value) * 0.01;
      else if (resulttypeval === "foot")
        result.value = Number(input.value) * 0.0328084;
      else if (resulttypeval === "inches")
        result.value = Number(input.value) * 0.394;
      else if (resulttypeval === "miles")
        result.value = Number(input.value) * 0.00000621;
    } else if (inputtypeval === "foot") {
      if (resulttypeval === "kilometer")
        result.value = Number(input.value) * 0.000305;
      else if (resulttypeval === "centimeter")
        result.value = Number(input.value) * 30.48;
      else if (resulttypeval === "millimeter")
        result.value = Number(input.value) * 304.8;
      else if (resulttypeval === "meter")
        result.value = Number(input.value) * 0.305;
      else if (resulttypeval === "foot") result.value = Number(input.value);
      else if (resulttypeval === "inches")
        result.value = Number(input.value) * 12;
      else if (resulttypeval === "miles")
        result.value = Number(input.value) * 0.000189;
    } else if (inputtypeval === "inches") {
      if (resulttypeval === "kilometer")
        result.value = Number(input.value) * 0.0000254;
      else if (resulttypeval === "centimeter")
        result.value = Number(input.value) * 2.54;
      else if (resulttypeval === "millimeter")
        result.value = Number(input.value) * 25.4;
      else if (resulttypeval === "meter")
        result.value = Number(input.value) * 0.0254;
      else if (resulttypeval === "foot")
        result.value = Number(input.value) * 0.0833;
      else if (resulttypeval === "inches") result.value = Number(input.value);
      else if (resulttypeval === "miles")
        result.value = Number(input.value) * 0.00001578;
    } else if (inputtypeval === "miles") {
      if (resulttypeval === "kilometer")
        result.value = Number(input.value) * 1.609;
      else if (resulttypeval === "centimeter")
        result.value = Number(input.value) * 160934.4;
      else if (resulttypeval === "millimeter")
        result.value = Number(input.value) * 1609344;
      else if (resulttypeval === "meter")
        result.value = Number(input.value) * 1609.344;
      else if (resulttypeval === "foot")
        result.value = Number(input.value) * 5280;
      else if (resulttypeval === "inches")
        result.value = Number(input.value) * 63360;
      else if (resulttypeval === "miles") result.value = Number(input.value);
    }
  }
}

function getTempunit() {
  let input = document.getElementById("Temp");
  let result = document.getElementById("result1");
  let inputtype = document.getElementById("temp1");
  let resulttype = document.getElementById("temp2");
  let inputtypeval, resulttypeval;
  input.addEventListener("keyup", myResult);
  inputtype.addEventListener("change", myResult);
  resulttype.addEventListener("change", myResult);
  inputtypeval = inputtype.value;
  resulttypeval = resulttype.value;
  function myResult() {
    inputtypeval = inputtype.value;
    resulttypeval = resulttype.value;
    if (inputtypeval === resulttypeval) {
      result.value = Number(input.value);
    }
    if (inputtypeval === "celsius") {
      if (resulttypeval === "kelvin")
        result.value = Number(input.value) + 273.15;
      else if (resulttypeval === "fehrenite")
        result.value = Number(input.value) * 1.8 + 32;
    } else if (inputtypeval === "kelvin") {
      if (resulttypeval === "celsius")
        result.value = Number(input.value) - 273.15;
      else if (resulttypeval === "fehrenite")
        result.value = (Number(input.value) - 273.15) * 1.8 + 32;
    } else if (inputtypeval === "fehrenite") {
      if (resulttypeval === "celsius") result.value = Number(input.value) * 1.8;
      else if (resulttypeval === "kelvin")
        result.value = 1.8 * Number(input.value) + 459.67;
    }
  }
}

function getAreaunit() {
  let input = document.getElementById("Area");
  let result = document.getElementById("result2");
  let inputtype = document.getElementById("area1");
  let resulttype = document.getElementById("area2");
  input.addEventListener("keyup", myResult);
  inputtype.addEventListener("change", myResult);
  resulttype.addEventListener("change", myResult);
  inputtypeval = inputtype.value;
  resulttypeval = resulttype.value;
  function myResult() {
    inputtypeval = inputtype.value;
    resulttypeval = resulttype.value;
    if (inputtypeval === "squaremeter") {
      if (resulttypeval === "squarefoot")
        result.value = Number(input.value) * 10.764;
      else if (resulttypeval === "acre")
        result.value = Number(input.value) * 0.000247;
    } else if (inputtypeval === "squarefoot") {
      if (resulttypeval === "squaremeter")
        result.value = Number(input.value) * 0.0929;
      else if (resulttypeval === "acre")
        result.value = Number(input.value) * 0.00002296;
    } else if (inputtypeval === "acre") {
      if (resulttypeval === "squaremeter")
        result.value = Number(input.value) * 4046.856;
      else if (resulttypeval === "squarefoot")
        result.value = Number(input.value) * 43560;
    }
    if (inputtypeval === resulttypeval) {
      result.value = Number(input.value);
    }
  }
}

function getWeight() {
  let input = document.getElementById("Weight");
  let result = document.getElementById("result4");
  let inputtyppe = document.querySelector("#weight1");
  console.log(inputtyppe.value);
  let resulttype = document.getElementById("weight2");
  let inputtypeval, resulttypeval;
  input.addEventListener("keyup", myResult);
  inputtyppe.addEventListener("change", myResult);
  resulttype.addEventListener("change", myResult);
  inputtypeval = inputtyppe.value;
  resulttypeval = resulttype.value;
  function myResult() {
    inputtypeval = inputtyppe.value;
    resulttypeval = resulttype.value;
    if (inputtypeval === "kilogram") {
      if (resulttypeval === "gram") result.value = Number(input.value) * 1000;
      else if (resulttypeval === "pound")
        result.value = Number(input.value) * 2.205;
      else if (resulttypeval === "ton")
        result.value = Number(input.value) * 0.0011;
    } else if (inputtypeval === "gram") {
      if (resulttypeval === "kilogram")
        result.value = Number(input.value) * 0.001;
      else if (resulttypeval === "pound")
        result.value = Number(input.value) * 0.0022;
      else if (resulttypeval === "ton")
        result.value = Number(input.value) * 0.000001102;
    } else if (inputtypeval === "pound") {
      if (resulttypeval === "gram")
        result.value = Number(input.value) * 453.592;
      else if (resulttypeval === "kilogram")
        result.value = Number(input.value) * 0.454;
      else if (resulttypeval === "ton")
        result.value = Number(input.value) * 0.0005;
    } else if (inputtypeval === "ton") {
      if (resulttypeval === "gram")
        result.value = Number(input.value) * 907184.74;
      else if (resulttypeval === "pound")
        result.value = Number(input.value) * 2000;
      else if (resulttypeval === "kilogram")
        result.value = Number(input.value) * 907.18474;
    }
    if (inputtypeval === resulttypeval) {
      result.value = Number(input.value);
    }
  }
}

function getTime() {
  let input = document.getElementById("Time");
  let result = document.getElementById("result5");
  let inputtype = document.getElementById("time1");
  let resulttype = document.getElementById("time2");
  let inputtypeval, resulttypeval;
  input.addEventListener("keyup", myResult);
  inputtype.addEventListener("change", myResult);
  resulttype.addEventListener("change", myResult);
  inputtypeval = inputtype.value;
  resulttypeval = resulttype.value;
  function myResult() {
    inputtypeval = inputtype.value;
    resulttypeval = resulttype.value;
    if (inputtypeval === resulttypeval) {
      result.value = Number(input.value);
    }
    if (inputtypeval === "second") {
      if (resulttypeval === "minute")
        result.value = Number(input.value) * 0.0167;
      else if (resulttypeval === "hour")
        result.value = Number(input.value) * 0.000278;
      else if (resulttypeval === "day")
        result.value = Number(input.value) * 0.00001157;
      else if (resulttypeval === "month")
        result.value = Number(input.value) * 0.0000003805;
      else if (resulttypeval === "year")
        result.value = Number(input.value) * 0.00000003171;
    } else if (inputtypeval === "minute") {
      if (resulttypeval === "second") result.value = Number(input.value) * 60;
      else if (resulttypeval === "hour")
        result.value = Number(input.value) * 0.0167;
      else if (resulttypeval === "day")
        result.value = Number(input.value) * 0.000694;
      else if (resulttypeval === "month")
        result.value = Number(input.value) * 0.00002283;
      else if (resulttypeval === "year")
        result.value = Number(input.value) * 0.000001903;
    } else if (inputtypeval === "hour") {
      if (resulttypeval === "minute") result.value = Number(input.value) * 60;
      else if (resulttypeval === "second")
        result.value = Number(input.value) * 3600;
      else if (resulttypeval === "day")
        result.value = Number(input.value) * 0.0417;
      else if (resulttypeval === "month")
        result.value = Number(input.value) * 0.00137;
      else if (resulttypeval === "year")
        result.value = Number(input.value) * 0.000114;
    } else if (inputtypeval === "day") {
      if (resulttypeval === "minute") result.value = Number(input.value) * 1440;
      else if (resulttypeval === "hour")
        result.value = Number(input.value) * 24;
      else if (resulttypeval === "second")
        result.value = Number(input.value) * 86400;
      else if (resulttypeval === "month")
        result.value = Number(input.value) * 0.0329;
      else if (resulttypeval === "year")
        result.value = Number(input.value) * 0.002737;
    } else if (inputtypeval === "month") {
      if (resulttypeval === "minute")
        result.value = Number(input.value) * 43800.048;
      else if (resulttypeval === "hour")
        result.value = Number(input.value) * 730.001;
      else if (resulttypeval === "day")
        result.value = Number(input.value) * 30.417;
      else if (resulttypeval === "second")
        result.value = Number(input.value) * 2628002;
      else if (resulttypeval === "year")
        result.value = Number(input.value) * 0.0833;
    } else if (inputtypeval === "year") {
      if (resulttypeval === "minute")
        result.value = Number(input.value) * 525600;
      else if (resulttypeval === "hour")
        result.value = Number(input.value) * 8760;
      else if (resulttypeval === "day")
        result.value = Number(input.value) * 365;
      else if (resulttypeval === "month")
        result.value = Number(input.value) * 12;
      else if (resulttypeval === "second")
        result.value = Number(input.value) * 31536000;
    }
  }
}
