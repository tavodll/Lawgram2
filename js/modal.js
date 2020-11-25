$(document).ready(function () {

  $('.bene-persona1').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal1" id="modal1"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>Conoce</h2><p>Encuentra tu roommate indicado y divide los costos</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#beneficios').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal1').remove();
    })
  })
  $('.bene-persona2').on('click', function () {
    var moda = $('#modal');
    moda.css('visibility','visible');

    $('#btnCerrar').on('click', function () {
      moda.css('visibility','hidden');
    })
  })
  $('.bene-persona3').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal1" id="modal1"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>Alquila</h2><p>Obté una mejor comunicación entre arrendatario y arrendador</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#beneficios').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal1').remove();
    })
  })
  $('.bene-abogado1').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal1" id="modal1"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>Mayores ingresos</h2><p>Obten mayores ingresos gracias a la exposicion publica que te ofrecemos.</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#beneficios').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal1').remove();
    })
  })
  $('.bene-abogado2').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal1" id="modal1"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>Administracion de casos</h2><p>Administra y organiza tus casos de una manera eficiente y sencilla gracias a nuestras herramientas.</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#beneficios').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal1').remove();
    })
  })
  $('.bene-abogado3').on('click', function () {

    var modal = '<div class="modal1" id="modal1"><div class="contenedor-modal"><img src="img/bene-abogado31.jpg" alt=""><div class="textos-modal"><h2>Comunidad</h2><p>Podra ser parte de nuestra gran comunidad, en la cual podra compartir tus experiencias y casos para recibir un opinio y/o ayuda de otro abogado.</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#beneficios').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal1').remove();
    })
  })

  $(document).on('keyup', function (e) {
    if (e.which==27) {
      $('#modal').remove();
    }
  })

});
