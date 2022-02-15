const DiaNumero = new Date().getDate();
const Ano = new Date().getFullYear();
const DiaNome = new Date().toLocaleString("default", {weekday: "long"});
const MesNome = new Date().toLocaleString("default", {month: "long"});

document.querySelector(".mês-nome").innerHTML = MesNome;
document.querySelector(".dia-nome").innerHTML = DiaNome;
document.querySelector(".data-numero").innerHTML = DiaNumero;
document.querySelector(".ano").innerHTML = Ano;