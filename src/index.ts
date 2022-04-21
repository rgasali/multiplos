//DECLARACION DE VARIABLES
let inputDividendo = <HTMLInputElement>document.getElementById("dividendo");
let inputDivisor = <HTMLInputElement>document.getElementById("divisor");
let btnValidarMultiplo = <HTMLButtonElement>(
  document.getElementById("btnValidarMultiplo")
);
let dividendo: number;
let divisor: number;

function esMultiplo(numDividendo: number, numDivisor: number): boolean {
  return numDividendo % numDivisor === 0;
}

btnValidarMultiplo.addEventListener("click", () => {
  dividendo = Number(inputDividendo.value);
  divisor = Number(inputDivisor.value);
  if (esMultiplo(dividendo, divisor)) {
    console.log(`${dividendo} es nultiplo de ${divisor}`);
  } else {
    console.log(`${dividendo} no es nultiplo de ${divisor}`);
  }
});
