document.addEventListener('DOMContentLoaded', function() {
  const elementosEscalables = document.querySelectorAll('.elemento-escalable');

  elementosEscalables.forEach(elemento => {
      elemento.addEventListener('mouseover', function() {
          this.classList.add('hovered');
      });

      elemento.addEventListener('mouseout', function() {
          this.classList.remove('hovered');
      });
  });
});

let sidemenu = document.getElementById("sidemenu");
  function openmenu(){
    sidemenu.style.right = "0";
  }
function closemenu(){
    sidemenu.style.right = "-200px";
  }
