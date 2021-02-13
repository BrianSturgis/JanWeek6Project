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

$(document).ready(function () {
  let userInput = parseFloat($("#userDollar").val());
  $("#convert-button1").click(function () {
    event.preventDefault();
    apiRateJPY();
  });
});
