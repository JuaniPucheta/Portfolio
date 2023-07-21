// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

// dark theme
function toggleDarkTheme() {
    // Obtener el elemento <body> del documento
    var body = document.querySelector('body');
    
    // Obtener el elemento del botón
    var themeToggle = document.querySelector('.btn-dark-theme-toggle');
    
    // Alternar la clase "dark-theme" en el <body> para cambiar el tema
    body.classList.toggle('dark-theme');

    // Obtener el botón
    var themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // Cambiar el texto del botón según el tema seleccionado
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'White Theme';
        themeToggleBtn.classList.remove('btn-primary');
        themeToggleBtn.classList.add('btn-info');
    } else {
        themeToggle.textContent = 'Blue Theme';
        themeToggleBtn.classList.remove('btn-info');
        themeToggleBtn.classList.add('btn-primary');
    }
}
