

//-------------PopUp--------------//
var btnAbrirPopup = document.getElementById('info_skills'),

	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
  btnCerrarPopup = document.getElementById('btn-cerrar-popup');
   
    
  var btnAbrirPopup1 = document.getElementById('info_projects'),

	overlay_projects = document.getElementById('overlay-projects'),
	popup_projects = document.getElementById('popup-projects'),
  btnCerrarPopup1 = document.getElementById('btn-cerrar-popup-1');
   
  var btnAbrirPopup2 = document.getElementById('info_hobbies'),

	overlay_hobbies = document.getElementById('overlay-hobbies'),
	popup_hobbies = document.getElementById('popup-hobbies'),
  btnCerrarPopup2 = document.getElementById('btn-cerrar-popup-2');
   
  var btnAbrirPopup3 = document.getElementById('info_github'),

	overlay_github = document.getElementById('overlay-github'),
	popup_github = document.getElementById('popup-github'),
  btnCerrarPopup3 = document.getElementById('btn-cerrar-popup-3');
   
    //---------------
    btnAbrirPopup.addEventListener('click', function(){
      overlay.classList.add('active_pop');
      popup.classList.add('active_pop');
    });
    btnAbrirPopup1.addEventListener('click', function(){
      overlay_projects.classList.add('active_pop');
      popup_projects.classList.add('active_pop');
    });
    btnAbrirPopup2.addEventListener('click', function(){
      overlay_hobbies.classList.add('active_pop');
      popup_hobbies.classList.add('active_pop');
    });
    btnAbrirPopup3.addEventListener('click', function(){
      overlay_github.classList.add('active_pop');
      popup_github.classList.add('active_pop');
    });
    //----------------
    btnCerrarPopup.addEventListener('click', function(e){
      e.preventDefault();
      overlay.classList.remove('active_pop');
      popup.classList.remove('active_pop');
    
    });
    btnCerrarPopup1.addEventListener('click', function(e){
      e.preventDefault();
      overlay_projects.classList.remove('active_pop');
      popup_projects.classList.remove('active_pop');
    
    });
    btnCerrarPopup2.addEventListener('click', function(e){
      e.preventDefault();
      overlay_hobbies.classList.remove('active_pop');
      popup_hobbies.classList.remove('active_pop');
    
    });
    btnCerrarPopup3.addEventListener('click', function(e){
      e.preventDefault();
      overlay_github.classList.remove('active_pop');
      popup_github.classList.remove('active_pop');
    
    });
    
//---------Dark Mode Switch-------------//
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
});