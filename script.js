let BotonEnviar = document.getElementsByClassName("BotonEnviar");

const ContenedorDeTarea = document.getElementById("box_list_Compras");

function AñadirInfoForm(event) {
  event.preventDefault();
  const value = event.target.textArea.value;
  if (!value) return;

  //Creacion del elemento
  const task = document.createElement("li");
  task.classList.add("task");
  //CREAR AQUI DEACUERDO A LA CATEGORIA COMO SE DEBE ACCEDER
  // Y ASI FILTARRLO
  task.addEventListener("click", changeStateValue);
  task.textContent = value;
  ContenedorDeTarea.prepend(task);
  event.target.reset();
}

const changeStateValue = (event) => {
  event.target.classList.toggle("done");
  console.log(task)
};
