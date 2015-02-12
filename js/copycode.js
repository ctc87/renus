function calculate(){
  var re_f = /^[0-9]+[\s]*º?[\s]*(?:f|farenheit)$/i;
  var re_c = /^[0-9]+[\s]*º?[\s]*(?:c|celsius|centigrados)$/i; //exponente con parentesis sin memoria (?:[eE][+-]?\d+)? //anclas ^(comienza por) $(termina)
  // r= /^\s*([-+]?\d+(?:\.\d+)?(?:)				//los parentesis con memoria generan un vector donde se almacenan las partes
  var re_number =/^[-+]?[0-9]+(?:\.[0-9]+)|-?[0-9]+(?:[eE][+-]?\d+)?$/; //rehacer con exponente con una sla er y usando el array de las er con match y no exec
  var temperature = document.getElementById("original");
  var span_to_write = document.getElementById("converted");
  var original_temperature = temperature.value;
  var number, i=0;
  var font_color, escale;
  if(re_f.test(original_temperature)){
     number = re_number.exec(original_temperature);
     var new_temperature = (number - 32) * 5/9;
     color = "green";
     escale = "Celsius";
    if(document.getElementById('cont1').style.opacity!=0){
      for (i = 10; i >= 0; i--){
	setTimeout("document.getElementById('cont1').style.opacity = '" + (i / 10) + "'", (10 - i) * 100);
	setTimeout("document.getElementById('cont4').style.opacity = '" + (i / 10) + "'", (10 - i) * 100);
      }
    }
    for (i = 0; i <= 10; i++){
	setTimeout("document.getElementById('cont2').style.opacity = '" + (i / 10) + "'", i * 100);
	setTimeout("document.getElementById('cont3').style.opacity = '" + (i / 10) + "'", i * 100);
	
    }
  } else if(re_c.test(original_temperature)){
     number = re_number.exec(original_temperature);
     var new_temperature = (number * 9/5) + 32;
     color = "blue";
     escale = "Farenheit"
    if(document.getElementById('cont2').style.opacity!=0){
      for (i = 10; i >= 0; i--){
	setTimeout("document.getElementById('cont2').style.opacity = '" + (i / 10) + "'", (10 - i) * 100)
	setTimeout("document.getElementById('cont3').style.opacity = '" + (i / 10) + "'", (10 - i) * 100);
      }
    }
    for (i = 0; i <= 10; i++){
	setTimeout("document.getElementById('cont1').style.opacity = '" + (i / 10) + "'", i * 100);
	setTimeout("document.getElementById('cont4').style.opacity = '" + (i / 10) + "'", i * 100);
    }
  }
  else{
    var new_temperature = "ERROR! Try something like '-4.2C' instead";
     color = "red";
    if(document.getElementById('cont2').style.opacity!=0){
      for (i = 10; i >= 0; i--)
	setTimeout("document.getElementById('cont2').style.opacity = '" + (i / 10) + "'", (10 - i) * 100);
	setTimeout("document.getElementById('cont3').style.opacity = '" + (i / 10) + "'", (10 - i) * 100);
    }
    if(document.getElementById('cont1').style.opacity!=0){
      for (i = 10; i >= 0; i--)
	setTimeout("document.getElementById('cont1').style.opacity = '" + (i / 10) + "'", (10 - i) * 100);
	setTimeout("document.getElementById('cont4').style.opacity = '" + (i / 10) + "'", (10 - i) * 100);
    }
  }
  span_to_write.innerHTML = new_temperature + " " + escale;
  span_to_write.style.color = color;

}


function ocultar(id) {
for (i = 10; i >= 0; i--)
 setTimeout("document.getElementById(id).style.opacity = '" + (i / 10) + "'", (10 - i) * 100)
}
function mostrar(id) {
for (i = 0; i <= 10; i++)
 setTimeout("document.getElementById(id).style.opacity = '" + (i / 10) + "'", i * 100)
}
