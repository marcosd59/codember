function decode(text) {
  let total = 0;
  let resultado = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === "#") {
      total++;
    } else if (text.charAt(i) === "@") {
      total--;
    } else if (text.charAt(i) === "*") {
      total = total * total;
    } else if (text.charAt(i) === "&") {
      resultado += total;
    }
  }

  return resultado;
}

let mensaje =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

console.log(decode(mensaje));
