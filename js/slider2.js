$(document).ready(function () {

    var slider = $('#slider1');
    var btnAnterior = $('#btnAnterior1');
    var btnSiguiente = $('#btnSiguiente1');
  
    $('#slider1 .slide1:last').insertBefore('#slider1 .slide1:first');
  
  
    function moverDerecha() {
      if (!slider.is(':animated')) {
        slider.animate({
          marginLeft: '-100%'
        }, 700, function () {
          $('#slider1 .slide1:first').insertAfter('#slider1 .slide1:last');
          resetInterval();
        });
      }
  
    }
  
    btnSiguiente.on('click', moverDerecha);
  
    function moverIzquierda() {
      if (!slider.is(':animated')) {
        $('#slider1 .slide1:last').insertBefore('#slider1 .slide1:first');
        slider.css('margin-left', '-100%');
        slider.animate({
        }, 700, function () {
          resetInterval()
        });
      }
  
    }
  
    btnAnterior.on('click', moverIzquierda);
  
  
  
    var intervalo = setInterval(moverDerecha, 5000);
  
    function resetInterval(){
      clearInterval(intervalo);
      intervalo = setInterval(moverDerecha, 5000);
    }
  
  
  
  
  });