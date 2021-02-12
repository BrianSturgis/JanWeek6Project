import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/apiscript.js';





$(document).ready(function () {
  $("#exchange").click(function () {
    event.preventDefault();
    let userInput = parseFloat($("#userDollar").val());
    $(".output").html(userInput);

    console.log(userInput);
  });
});