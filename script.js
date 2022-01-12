let BotonEnviar = document.getElementsByClassName("BotonEnviar");


function AñadirInfoForm(event) {
  event.preventDefault();


  let filtro;
  filtro = document.formul.mySelect.value;
 
 let ContenedorDeTarea = document.getElementById(filtro);
 console.log(`este es el contenedor : ${filtro}`);











  let value = event.target.textArea.value;
  if (!value) return;
  console.log(`este es el valor : ${value}`);

  //Creacion del elemento
  const task = document.createElement("li");
  task.classList.add("task");
  //CREAR AQUI DEACUERDO A LA CATEGORIA COMO SE DEBE ACCEDER// Y ASI FILTARRLO

  task.addEventListener("click", changeStateValue);
  task.textContent = value;
  ContenedorDeTarea.prepend(task);
  console.log(`valor seleccionado : ${document.formul.mySelect.value}`);

  event.target.reset();
}

const changeStateValue = (event) => {
  event.target.classList.toggle("done");
  console.log(task);
};
