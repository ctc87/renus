function calculate(){const t="ERROR! Try something like '-4.2C' instead";var e,o,n=/[0-9]+[\s]*[º]*[f,farenheit]/i,c=/[0-9]+[\s]*[º]*[c,celsius,centigrados]/i,i=/-?[0-9]+\.[0-9]+|-?[0-9]+/,y=document.getElementById("original"),m=document.getElementById("converted"),l=y.value,s=0;if(n.test(l)){e=i.exec(l);var d=5*(e-32)/9;if(color="green",o="Celsius",0!=document.getElementById("cont1").style.opacity)for(s=10;s>=0;s--)setTimeout("document.getElementById('cont1').style.opacity = '"+s/10+"'",100*(10-s)),setTimeout("document.getElementById('cont4').style.opacity = '"+s/10+"'",100*(10-s));for(s=0;10>=s;s++)setTimeout("document.getElementById('cont2').style.opacity = '"+s/10+"'",100*s),setTimeout("document.getElementById('cont3').style.opacity = '"+s/10+"'",100*s)}else if(c.test(l)){e=i.exec(l);var d=9*e/5+32;if(color="blue",o="Farenheit",0!=document.getElementById("cont2").style.opacity)for(s=10;s>=0;s--)setTimeout("document.getElementById('cont2').style.opacity = '"+s/10+"'",100*(10-s)),setTimeout("document.getElementById('cont3').style.opacity = '"+s/10+"'",100*(10-s));for(s=0;10>=s;s++)setTimeout("document.getElementById('cont1').style.opacity = '"+s/10+"'",100*s),setTimeout("document.getElementById('cont4').style.opacity = '"+s/10+"'",100*s)}else{var d=t;if(color="red",0!=document.getElementById("cont2").style.opacity){for(s=10;s>=0;s--)setTimeout("document.getElementById('cont2').style.opacity = '"+s/10+"'",100*(10-s));setTimeout("document.getElementById('cont3').style.opacity = '"+s/10+"'",100*(10-s))}if(0!=document.getElementById("cont1").style.opacity){for(s=10;s>=0;s--)setTimeout("document.getElementById('cont1').style.opacity = '"+s/10+"'",100*(10-s));setTimeout("document.getElementById('cont4').style.opacity = '"+s/10+"'",100*(10-s))}}m.innerHTML=d+" "+o,m.style.color=color}function ocultar(){for(i=10;i>=0;i--)setTimeout("document.getElementById(id).style.opacity = '"+i/10+"'",100*(10-i))}function mostrar(){for(i=0;i<=10;i++)setTimeout("document.getElementById(id).style.opacity = '"+i/10+"'",100*i)}