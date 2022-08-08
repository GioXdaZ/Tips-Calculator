"use strict";

const $ = (selector) => document.querySelector(selector);

// inputs
const bill = $(".input-bill");
const person = $(".input-person");
const customTipPorcent = $(".custom-input");

// Buttons
const tip5 = $(".tip-5");
const tip10 = $(".tip-10");
const tip15 = $(".tip-15");
const tip25 = $(".tip-25");
const tip50 = $(".tip-50");

//Results

const tipAmount = $(".result--0");
const total = $(".result--1");

tipAmount.textContent = "$" + (0).toFixed(2);
total.textContent = "$" + (0).toFixed(2);

function calculator() {
  let num0 = bill.value;
  let num1 = customTipPorcent.value / 100;
  let num2 = person.value;

  let miEcuacion = (num0 * num1) / num2;
  tipAmount.textContent = miEcuacion;

  let miEcuacion2 = num0 / num2 + miEcuacion;
  total.textContent = miEcuacion2;

  return { miEcuacion, miEcuacion2 };
}
