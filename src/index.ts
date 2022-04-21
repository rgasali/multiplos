//DECLARACION DE VARIABLES
let inputDividendo = <HTMLInputElement>document.getElementById("dividendo");
let inputDivisor = <HTMLInputElement>document.getElementById("divisor");
let btnValidarMultiplo = <HTMLButtonElement>(
  document.getElementById("btnValidarMultiplo")
);
let dividendo: number;
let divisor: number;
let cantDivisores: number;

//Declaracion de funciones

function esMultiplo(numDividendo: number, numDivisor: number): boolean {
  return numDividendo % numDivisor === 0;
}

function contarDivisores(numeroADividir: number): number {
  let cantidadDivisores: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numeroADividir; divisor++) {
    if (esMultiplo(numeroADividir, divisor)) {
      cantidadDivisores++;
      console.log(cantidadDivisores);
    }
  }
  return cantidadDivisores;
}

btnValidarMultiplo.addEventListener("click", () => {
  dividendo = Number(inputDividendo.value);
  divisor = Number(inputDivisor.value);
  if (esMultiplo(dividendo, divisor)) {
    console.log(`${dividendo} es nultiplo de ${divisor}`);
  } else {
    console.log(`${dividendo} no es nultiplo de ${divisor}`);
  }
  cantDivisores = contarDivisores(dividendo);
  console.log(
    `la cantidad de divisores de ${dividendo} es ${Number(cantDivisores)}`
  );
});
