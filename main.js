function changeColor(event){
    let gry = document.querySelector(".grey")
    if (gry === null){
    event.target.style.backgroundColor = 'grey';
    event.target.classList.add("grey");
    }
    else{
    let gry = document.querySelector(".grey");
    gry.style.backgroundColor = "hsl(213, 19%, 18%)"
    gry.classList.remove("grey");
    event.target.style.backgroundColor = 'grey';
    event.target.classList.add("grey");
    }
    console.log('print'); 
  }
  function submit(event){
    let gry = document.querySelector(".grey").innerHTML;
    document.querySelector(".card-container1").style.display = "none";
    document.querySelector(".card-container2").style.display = "flex";
    document.querySelector(".select").innerHTML = 'You selected ' + gry + ' out of 5';
  }