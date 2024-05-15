function determinarRank(nomeHeroi, xpHeroi) {
  if (xpHeroi < 1000) {
    return nomeHeroi + " é de nível Ferro.";
  } else if (xpHeroi <= 2000) {
    return nomeHeroi + " é de nível Bronze.";
  } else if (xpHeroi <= 5000) {
    return nomeHeroi + " é de nível Prata.";
  } else if (xpHeroi <= 7000) {
    return nomeHeroi + " é de nível Ouro.";
  } else if (xpHeroi <= 8000) {
    return nomeHeroi + " é de nível Platina.";
  } else if (xpHeroi <= 9000) {
    return nomeHeroi + " é de nível Ascendente.";
  } else if (xpHeroi <= 10000) {
    return nomeHeroi + " é de nível Imortal.";
  } else {
    return nomeHeroi + " é de nível Radiante.";
  }
}

var nomeHeroi = "Super-Herói";
var xpHeroi = 7500;

var resultado = determinarRank(nomeHeroi, xpHeroi);
console.log(resultado);
