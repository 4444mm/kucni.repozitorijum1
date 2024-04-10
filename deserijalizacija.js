

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ucitaj").addEventListener("click", popuniFormu);
  
    function toggleValidacija(validation) {
      var element = document.getElementById(validation);
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
        element.classList.add("show");
      } else {
        element.classList.remove("show");
        element.classList.add("hidden");
      }
      
    }
  
    
    function popuniFormu() {
      let podaci = JSON.parse(document.querySelector("#ispis").value);
  
      console.log(podaci);
  
      if(podaci.ocena<6 || podaci.ocena>10){
          
          toggleValidacija("validationOcena");
          
      }
     
  
      let [godinaStr, brojStr] = podaci.brojIndeksa.split('/');
  
      let godina = parseInt(godinaStr);
      let broj = parseInt(brojStr);
      
      if (isNaN(godina) || godina < 2000) {
          toggleValidacija("validationIndeks");
      }
      else if (isNaN(broj) || broj < 1 || broj > 1000) {
          toggleValidacija("validationIndeks");
         
      }
  
      document.querySelector("#ocena").value = podaci.ocena;
      document.querySelector('#datum').value = podaci.datumIzlaska;
      document.querySelector('#broj-indexa').value = podaci.brojIndeksa;
      document.querySelector(`#${podaci.rok}`).checked = true;
      document.querySelector('#br-izlaska').value = podaci.redniBrojIzlaska;
      document.querySelector('#polozio').checked = podaci.polozen;
  
    }
  });