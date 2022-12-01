const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const button = document.getElementById("button");
const form = document.getElementById("form");

let parrafo = document.createElement("p");
form.append(parrafo);

let errores = [];

email.addEventListener("input", () => {
  let dataEmail = email.value;
  let expRegEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let emailOk = expRegEmail.test(dataEmail);
  if (emailOk) {
    email.style.background = "#0616";
    errores[0] = "";
  } else if (dataEmail == "") {
    email.style.background = "none";
  } else {
    email.style.background = "#f116";
    errores[0] = "Error en el 'email' | ";
  }
});

telefono.addEventListener("input", (e) => {
  let dataTel = telefono.value;
  let expRegTel = /^9[0-9]{8}$/gm;
  let telOk = expRegTel.test(dataTel);

  if (telOk) {
    telefono.style.background = "#0616";
    errores[1] = "";
  } else if (dataTel == "") {
    email.style.background = "none";
  } else {
    telefono.style.background = "#f116";
    errores[1] = "Error en el 'telefono' | ";
  }
});

//-------------

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(errores);
  if (!errores.every((e) => e == "")) {
    parrafo.textContent = errores.join("");
  } else {
    parrafo.textContent = "Todo ok";
  }
});
