document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("posalji").addEventListener("click", podaciForme);
  
  function toggleValidacija(validation){
  
      var element = document.getElementById(validation);
      if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          element.classList.add("show");
      } else {
          element.classList.remove("show");
          element.classList.add("hidden");
      }
  
  }
  
  
    function podaciForme() {
      let ocena = document.querySelector("#ocena").value;
      let datumIzlaska = document.querySelector('#datum').value;
      let brojIndeksa = document.querySelector('#broj-indexa').value;
      let rok = document.querySelector('input[name="rok"]:checked').value;
      let redniBrojIzlaska = document.querySelector('#br-izlaska').value;
      let polozen = document.querySelector('#polozio');
       
  
      if(ocena<6 || ocena>10){
          polozen.checked = false;
          toggleValidacija("validationOcena");
          
      }
      else{
          polozen.checked = true;
      }
  
      let [godinaStr, brojStr] = brojIndeksa.split('/');
  
      let godina = parseInt(godinaStr);
      let broj = parseInt(brojStr);
      
      if (isNaN(godina) || godina < 2000) {
          toggleValidacija("validationIndeks");
          
      }
      else if (isNaN(broj) || broj < 1 || broj > 1000) {
          toggleValidacija("validationIndeks");
         
      }
  
      
      let podaci = {
  
          "ocena" : ocena,
          "datumIzlaska" : datumIzlaska,
          "brojIndeksa" : brojIndeksa,
          "rok" : rok,
          "redniBrojIzlaska" : redniBrojIzlaska,
          "polozen" : polozen.checked
  
      }
  
      let textAreaPodaci = document.querySelector('#ispis');
  
      textAreaPodaci.value = JSON.stringify(podaci);
  
      document.getElementById("form").reset();
  
  
  
  
      console.log(podaci);
  
  
    }
  });