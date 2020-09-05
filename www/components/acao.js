// This is a JavaScript file

$(document).on("click", "#Somar", function (){
  var valor1 = $("#Valor1").val();
  var valor2 = $("#Valor2").val();

  var resultado = parseFloat(valor1) + parseFloat(valor2);

  $("#Resultado").val(resultado);
});