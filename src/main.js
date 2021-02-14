/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import CurrencyConverter from './js/apiscript.js';

//api  click function logic
$(".yenRate").click(function () {
  apiRateJPY();
});

$(".pesoRate").click(function () {
  apiRateMXN();
});

$(".euroRate").click(function () {
  apiRateEUR();
});

$(".canRate").click(function () {
  apiRateCAD();
});

$(".ausRate").click(function () {
  apiRateAUD();
});

$(".ukRate").click(function () {
  apiRateGBP();
});

$(".hkRate").click(function () {
  apiRateHKD();
});

$(".marsRate").click(function () {
  apiRateMRS();
});


function convertJPY(response) {
  let inputtedDollar = parseFloat($(".field").val());
  console.log(inputtedDollar);
  if (isNaN(response.conversion_rates.JPY)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.JPY * Math.round(inputtedDollar)} Yen.`);
  }
}
function convertMXN(response) {
  let inputtedDollar = parseFloat($(".field").val());
  if (isNaN(response.conversion_rates.MXN)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.MXN * Math.round(inputtedDollar)} Pesos.`);
  }
}
function convertEUR(response) {
  let inputtedDollar = parseFloat($(".field").val());
  if (isNaN(response.conversion_rates.EUR)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.EUR * Math.round(inputtedDollar)} Euros.`);
  }
}
function convertCAD(response) {
  let inputtedDollar = parseFloat($(".field").val());
  if (isNaN(response.conversion_rates.CAD)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.CAD * Math.round(inputtedDollar)} Canadian Dollars.`);
  }
}
function convertAUD(response) {
  let inputtedDollar = parseFloat($(".field").val());
  if (isNaN(response.conversion_rates.AUD)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.AUD * Math.round(inputtedDollar)} Aussie Dollars.`);
  }
}
function convertGBP(response) {
  let inputtedDollar = parseFloat($(".field").val());
  if (isNaN(response.conversion_rates.GBP)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.GBP * Math.round(inputtedDollar)} Pounds.`);
  }
}
function convertHKD(response) {
  let inputtedDollar = parseFloat($(".field").val());
  if (isNaN(response.conversion_rates.GBP)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.HKD * Math.round(inputtedDollar)} Hong Kong Dollars.`);
  }
}
function convertMRS(response) {
  let inputtedDollar = parseFloat($(".field").val());
  if (isNaN(response.conversion_rates.MRS)){
    $(".note").html(`currency not avail API call: ${response.result}`);
  } else {
    $(".note").html(` ${response.conversion_rates.MRS * Math.round(inputtedDollar)} Mars Dollars.`);
  }
}






async function apiRateJPY() {
  const response = await CurrencyConverter.getUSD();
  convertJPY(response);
}
async function apiRateMXN() {
  const response = await CurrencyConverter.getUSD();
  convertMXN(response);
}
async function apiRateEUR() {
  const response = await CurrencyConverter.getUSD();
  convertEUR(response);
}
async function apiRateCAD() {
  const response = await CurrencyConverter.getUSD();
  convertCAD(response);
}
async function apiRateAUD() {
  const response = await CurrencyConverter.getUSD();
  convertAUD(response);
}
async function apiRateGBP() {
  const response = await CurrencyConverter.getUSD();
  convertGBP(response);
}
async function apiRateHKD() {
  const response = await CurrencyConverter.getUSD();
  convertHKD(response);
}
async function apiRateMRS() {
  const response = await CurrencyConverter.getUSD();
  convertMRS(response);
}

// calculator logic
const $input = document.querySelector("input");
document.querySelectorAll(".num__key").forEach(
  el => {
    el.onclick = () => $input.value = $input.value !== "0" ? $input.value + el.innerText : el.innerText;
  }
);
const buffer = []
const opCallback = opName => () => {
    let currentVal = parseFloat($input.value);
    if (opName === "percent") {
      currentVal *= 0.01;
      $input.value = currentVal;
    }
    else {
      if (buffer && buffer.length) {
        buffer.push({ value: currentVal });
        const result = evaluate(buffer);
        buffer.push({ value: result });
        buffer.push({ value: opName });
        $input.value = "";
      }
      else {
        buffer.push({ value: currentVal });
        buffer.push({ value: opName });
        $input.value = "";
      }
    }
  }
const evaluate = buffer => {
  const secondOperand = buffer.pop().value;
  const operator = buffer.pop().value;
  const firstOperand = buffer.pop().value;
  switch (operator) {
    case "add":
      return firstOperand + secondOperand;
      break;
    case "subtract":
      return firstOperand - secondOperand;
      break;
    case "multiply":
      return firstOperand * secondOperand;
      break;
    case "divide":
      return firstOperand / secondOperand;
      break;
    default:
      return secondOperand;
  }
}
for (const opName of [ "add", "subtract", "multiply", "divide", "percent" ]) {
  document.querySelector(`.op__key[op=${opName}]`).onclick =
    opCallback(opName);
}
document.querySelector(".eq__key").onclick =
  () => {
    if (buffer && buffer.length) {
      buffer.push({ value: parseFloat($input.value) });
      $input.value = evaluate(buffer);
    }
  }
document.querySelector(".op__key[op=clear]").onclick =
  () => {
    $input.value = 0;
    buffer.length = 0;
    console.log($input.value);
  }
document.querySelector(".op__key[op=negate]").onclick =
  () => $input.value = -parseFloat($input.value);
  $input.value