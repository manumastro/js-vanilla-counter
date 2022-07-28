// setto il count iniziale
let count = 0;

//seleziono value e buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
  //console.log(btn);
  btn.addEventListener('click', function(e){

    //assegno a styles la classe del button selezionato tramite l'evento: e.currentTarget.classList

    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
      count--;
    }else if(styles.contains('reset')){
      count = 0;
    }else{
      count++;
    }
    if(count > 0){
      value.style.color = "green";
    }
    if(count < 0){
      value.style.color = "red";
    }
    if(count === 0){
      value.style.color = "#222";
    }
    value.textContent = count;
  })
});

