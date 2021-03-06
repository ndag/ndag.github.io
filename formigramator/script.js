/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunction1() {
  direct = document.querySelector('#direct-input');
            direct.style.visibility = 'visible';
            direct.style.position = 'inherit';
  txt = document.querySelector('#txt-input');
            txt.style.visibility = 'hidden';
            txt.style.position = 'fixed';


}

function myFunction2() {
  direct = document.querySelector('#direct-input');
            direct.style.visibility = 'hidden';
            direct.style.position = 'fixed';
  txt = document.querySelector('#txt-input');
            txt.style.visibility = 'visible';
            txt.style.position = 'inherit';

}
