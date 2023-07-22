// Array con los nombres de los archivos de las imágenes
const skillIcons = [
    "icons8-nodejs-144.png",
    "icons8-python-144.svg",
    "icons8-angular-144.png",
    "icons8-java-144.svg",
    "icons8-php-160.png",
    "icons8-postman-api-128.png",
    "icons8-django-144.svg",
    "icons8-mysql-144.svg",
    "anylogic.png",
    "icons8-firebase-144.svg",
    "icons8-git-144.svg",
    "icons8-html-144.svg",
    "icons8-css.svg",
    "icons8-js.svg",
    "icons8-microsoft-office-2019-144.png"
  ];

  
  // Obtener el elemento div donde se agregarán las imágenes
  const skillsWrapper = document.getElementById("skillsWrapper");
  
  // Bucle para generar las imágenes
  for (const icon of skillIcons) {
    // Crear el elemento <img>
    const img = document.createElement("img");
    
    // Configurar los atributos de la imagen
    img.src = `assets/imgs/icons/${icon}`;
    img.alt = "";
    img.loading = "lazy";
    img.classList.add("icon", "icon-card");
    
    // Agregar la imagen al contenedor
    skillsWrapper.appendChild(img);
  }
  