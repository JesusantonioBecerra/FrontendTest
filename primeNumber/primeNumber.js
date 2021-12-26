$(document).ready(function () {
  $("input").focus(function () { $(this).select(); });
});
function calculateRange(minorNumber, biggerNumber) {
  try {
    let primeNumbers = [];
    for (let index = minorNumber; index <= biggerNumber; index += 1) {
      if (checkIsPrime(index)) {
        primeNumbers = [...primeNumbers, index];
      }
    }
    if (primeNumbers.length == 0) {
      throw 'No hay numeros primos en el rango ingresado.';
    }
    showPrimeNumbers(primeNumbers);
  } catch (error) {
    showPrimeNumbers(error);
    alert(error);
  }
}

function checkIsPrime(num) {
  try {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  } catch (error) {
    console.log(error);
  }
}

function checkRange() {
  try {
    const minorNumber = parseInt(document.getElementById('minorNumber')?.value ?? '0', 10);
    const biggerNumber = parseInt(document.getElementById('biggerNumber')?.value ?? '0', 10);
    if (minorNumber < 0 || biggerNumber < 0) {
      throw 'Favor ingresa un numero positivo';
    }
    if (biggerNumber < minorNumber) {
      throw 'El rango inferior no puede ser mayor al rango superior';
    }
    if (biggerNumber == minorNumber) {
      throw 'Los dos numeros del rango no deben ser iguales.';
    }
    calculateRange(minorNumber, biggerNumber);
  } catch (error) {
    showPrimeNumbers('No hay numeros primos en el rango ingresado.')
    alert(error);
  }
}

function showPrimeNumbers(primeNumbers) {
  try {
    let stringToAdd = primeNumbers.toString();
    const stringPrimeNumber = document.getElementById('primeNumbers');
    stringPrimeNumber.textContent = stringToAdd;
  } catch (error) {
    console.log(error);
  }
}