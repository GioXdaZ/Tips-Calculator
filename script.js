"use strict";

const $ = (selector) => document.querySelector(selector);

const bill = $(".input-bill");
const person = $(".input-person");
const customTipPorcent = $(".custom-input");

function inputBill() {
  bill.addEventListener("keyup", function (e) {
    console.log(e.target.value);
  });
}
inputBill();

function inputPerson() {
  person.addEventListener("keyup", function (e) {
    console.log(e.target.value);
  });
}
inputPerson();

function inputCustomPorcent() {
  customTipPorcent.addEventListener("keyup", function (e) {
    console.log(e.target.value);
  });
}
inputCustomPorcent();
