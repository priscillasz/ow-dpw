/*-----CONTAGEM ATE A DATA DE UM EVENTO-----*/
// Define a data do evento
var countDownDate = new Date("May 27, 2021 12:00:00").getTime();

// Update do countdown a cada 1 segundo
var x = setInterval(function() {

  // Data atual e dia
  var now = new Date().getTime();
    
  // Diferença entre a data do evento e a data atual
  var distance = countDownDate - now;
  
  // Dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output do resultado em um elemento com id="evento"
  document.getElementById("evento").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // Se o countdown acabou, exibe a mensagem
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("evento").innerHTML = "EXPIRED";
  }
}, 1000);


/*-----CAROUSEL-----*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Muda imagem a cada 4 segundos
}


/*-----MUDA A IMAGEM AO PASSAR O MOUSE POR CIMA-----*/
// img1
function setNewImg()
{
    document.getElementById("img1").src ="imagens/257476_iw8p8eC4.png"
}

function setOldImg()
{
    document.getElementById("img1").src ="imagens/owl.jpg"
}

// img2
function setNewImg2()
{
    document.getElementById("img2").src ="imagens/download20200800154907.png"
}

function setOldImg2()
{
    document.getElementById("img2").src ="imagens/tracer.jpg"
}

// img3
function setNewImg3()
{
    document.getElementById("img3").src ="imagens/download20200802020610.png"
}

function setOldImg3()
{
    document.getElementById("img3").src ="imagens/lofi.jpg"
}

// img4
function setNewImg4()
{
    document.getElementById("img4").src ="imagens/download20210402233046.png"
}

function setOldImg4()
{
    document.getElementById("img4").src ="imagens/gameplay2.jpg"
}
