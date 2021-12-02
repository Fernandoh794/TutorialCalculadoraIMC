const calcular = document.querySelector(".calular");

function CalculoIMC() {
  const nome = document.querySelector(".nome").value;
  const altura = document.querySelector(".altura").value;
  const peso = document.querySelector(".peso").value;
  const resultado = document.querySelector(".resultado");

  const IMC = (peso / (altura * altura)).toFixed(1);

  if (IMC < 18.5) {
    resultado.textContent = `${nome} Você está abaixo do seu Peso: Seu IMC ${IMC}`;
  } else if (IMC < 25) {
    resultado.textContent = `${nome} Você está no seu Peso Ideal: Seu IMC ${IMC}`;
  }
  else if (IMC < 30) {
    resultado.textContent = `${nome} Você está acima do Seu Peso: Seu IMC ${IMC}`;
  }
  else if (IMC< 35) {
    resultado.textContent = `${nome} Você está com Obesidade grau I: Seu IMC ${IMC}`;
  }
  else if (IMC< 40) {
    resultado.textContent = `${nome} Você está com Obesidade grau II: Seu IMC ${IMC}`;
  } else {
    resultado.textContent = `${nome} Você está com Obesidade grau III: Seu IMC ${IMC}`;
  }

}

/**  < 18.5 abaixo do Peso */

/**  < 25 Peso Ideal */

//* Entre 25 e 30 acima do Peso */

//* Entre 30 e 35 Obesidade 1 */

//* Entre 35 e 40 Obesidade 2 */

//* acima de 40 Obesidade 3 */
