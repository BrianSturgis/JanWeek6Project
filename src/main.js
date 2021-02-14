/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import CurrencyConverter from './js/apiscript.js';



function getRateJPY(response) {
  let answer = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD is ${response.conversion_rates.JPY * Math.round(answer)} YEN.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}

async function apiRateJPY() {
  const response = await CurrencyConverter.getUSD();
  getRateJPY(response);
}









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


$(document).ready(function () {
  let userInput = parseFloat($($input.value).val());
  console.log(userInput);
  $("#convert-button1").click(function () {
    event.preventDefault();
    apiRateJPY();
  });
});
