let nomeDoHeroi = "Arthur Morgan"
let nivelDoHeroi = 7777

if (nivelDoHeroi <= 1000){nivelDoHeroi = "Ferro"}
else if (nivelDoHeroi <= 2000){nivelDoHeroi = "Bronze"}
else if (nivelDoHeroi <= 5000){nivelDoHeroi = "Prata"}
else if (nivelDoHeroi <= 7000){nivelDoHeroi = "Ouro"}
else if (nivelDoHeroi <= 8000){nivelDoHeroi = "Platina"}
else if (nivelDoHeroi <= 9000){nivelDoHeroi = "Ascendente"}
else if (nivelDoHeroi <= 10000){nivelDoHeroi = "Imortal"}
else if (nivelDoHeroi > 10000){nivelDoHeroi = "Radiante"}

console.log("O herói " + nomeDoHeroi + " é do nível " + nivelDoHeroi)