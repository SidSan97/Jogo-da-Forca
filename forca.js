/*
-------------------
      FORCA em DHTML 0.1 beta;  
               -------------------    

*/
var y =0;
  //  BIBLIOTECA DE PALAVRAS  
  var palavras = new Array();
  palavras[0]  = "carteira";
  palavras[1]  = "brasil";
  palavras[2]  = "amorzinho";
  palavras[3]  = "fresquinho";
  palavras[4]  = "andrezinho";
  palavras[5]  = "bobeira";
  palavras[6]  = "marcos";
  palavras[7]  = "selio";
  palavras[8]  = "jogo";
  palavras[9]  = "mapa";
  palavras[10] = "babado";
  palavras[11] = "ana";
  palavras[12] = "critico";
  palavras[13] = "windows";
  palavras[14] = "linux";
  palavras[15] = "macaco";
  palavras[16] = "panela";
  palavras[17] = "frederico";
  palavras[18] = "fofura";
  palavras[19] = "grafico";
  palavras[20] = "mula";
  palavras[21] = "cavalo";
  palavras[22] = "escola";
    
    //BIBLIOTECAS COM AS DICAS
    var dica = new Array();
        dica[0]  = "poe dinheiro";
        dica[1]  = "país";
        dica[2]  = "sentimento";
        dica[3]  = "frio";
        dica[4]  = "nome";
        dica[5]  = "besteira";
        dica[6]  = "outro nome";
        dica[7]  = "gas";

	// Variaveis GLOBAIS
    var  k;
    var iconte = Math.floor(Math.random()*2);
    var dj  = document.getElementById('jg');
    var dicas = document.getElementById('dicas');
    var erro = 1;
    var iconte = Math.floor(Math.random()*7);
    var ki = new Array(palavras[iconte].length);
    var kk = new Array(dica[iconte])
      // adicinando adicionar o valor "__" 
	//no vetor que armazena a palavra sorteada;
	var itempodejogo = 0;
    for(k=0;k<palavras[iconte].length;k++){

        ki[k]="__";
   }

    var p = new Array();
function tempodejogo(){
  setTimeout("tempodejogo()",1000);
  itempodejogo++;
}
/*
-------------------
      SORTEIO,
	  essa funcao eh chamada
	  todas as vezes que a 
	  pagina eh chamada ou
	  quando atualiza a pagina
	  e no termino do jogo
	  precionando o botao
	  NOVO JOGO; 
          -------------------    
*/	
	
function sorteio() 
{
    var djc = "<table cellpadding=2  ";
        djc = djc + "cellspacing=4 border=0 width=390 ";
        djc = djc + " height=40 bgcolor=#000000 style='border: ";
        djc = djc + " 1px solid #666666; width: 100%;'><tr>";

    for(k = 0; k < palavras[iconte].length; k++)
    {
   		p[k] = k;
		  djc = djc + "<td style='border: 0px solid #000000;' ";
      djc = djc + " bgcolor=#000000 align=center ";
      djc = djc + " valign=middle class=visao> __ </td>";
	  }
      djc = djc + "</tr></table><br>";
         dj.innerHTML = djc;
         dicas.innerHTML = "Dica: " + dica[iconte];
         document.getElementById('palavraSec').innerHTML = "Palavra é: " + palavras[iconte];
		  tempodejogo();
}
/*
-------------------
      VERIFICA ERRO
	  quando essa funcao eh chamada,
	  significa que o usuario chutou
	  uma letra que nao existe na 
	  palavra sorteada;  
          -------------------    
*/
function verificaerro(){
   var m = document.getElementById('g');

   switch (erro){
    case 0:
        break
    case 1:
       document.getElementById('CHAPEU').style.display = "block";
       document.getElementById('ABA').style.display = "block";
       document.getElementById('CHAPEU').style.display = "block";
       document.getElementById('CABECA').style.display = "block";
       document.getElementById('QUEIXO').style.display = "block";
       document.getElementById('BOCA').style.display = "block";
       document.getElementById('PESCOCO').style.display = "block";
        break
    case 2:
        document.getElementById('TRONCO').style.display = "block";
        break
    case 3:
        document.getElementById('BRACOD1').style.display = "block";
        document.getElementById('BRACOD2').style.display = "block";
        document.getElementById('MAOD').style.display = "block";
        break
    case 4:
        document.getElementById('BRACOE1').style.display = "block";
        document.getElementById('BRACOE2').style.display = "block";
        document.getElementById('MAOE').style.display = "block";
        break
    case 5:
        document.getElementById('COXAD').style.display = "block";
        document.getElementById('PERNAD').style.display = "block";
        document.getElementById('PED').style.display = "block";
        break
    case 6:
        document.getElementById('COXAE').style.display = "block";
        document.getElementById('PERNAE').style.display = "block";
        document.getElementById('PEE').style.display = "block";
        break
    default:
        document.getElementById('msgPerdeu').style.display = 'block';
        document.getElementById('newGame').style.display = 'block';
        document.getElementById('palavraSec').style.display = 'block';
  }
        erro++;		
}
/*
-------------------
      JOGAR -
	  inicia uma jogada.
	  quando o usuario clica em uma das
	  letras, esses dados sao  passados
	  por essa funcao que verifica se 
	  existe a letra na palavra sorteada; 
          -------------------    					
*/

function jogar(letra){
   var nome = palavras[iconte].toUpperCase();
       nome.split("");
   var erroSim = 0;
   var coleta = "";
   for(k = 0; k < palavras[iconte].length; k++){
      
		if(nome[k] == letra){

                ki[k] = letra;

         }
             if(ki[k] != "__") {

                coleta =  coleta + ki[k];

             }
       
    }
     if(coleta.match(letra) == letra){

        //  ENCONTROU
      } else {
               erroSim = 1;
             }
      var ik;
      var t;
      t = "<table cellpadding=2 cellspacing=4 ";
      t = t + " border=0 width=390 height=40 ";
      t = t + " bgcolor=#000000 style='border: ";
      t = t + " 1px solid #666666;'><tr>";
	  
     for(ik = 0; ik < palavras[iconte].length; ik++){
	     t = t + "<td style='border: ";
         t = t + "0px solid #000000;' bgcolor=#000000 ";
         t = t + " align=center valign=middle ";
         t = t + " class=visao>"+ ki[ik] +"</td>";
     }
	 
     if(erroSim == 1){            
        verificaerro();
        erroSim = 0;
     }
   	   t = t + "</tr></table><br>";
  	   dj.innerHTML = t;
	   
     if(coleta == palavras[iconte].toUpperCase()){

        document.getElementById('msgGanhou').style.display = 'block';
        document.getElementById('newGame').style.display = 'block';
        document.getElementById('palavraSec').style.display = 'block';
     }
}   

/*
-------------------
      TECLADO VIRTUAL  
          -------------------    
*/
	/*.write("<table id=tecladao cellpadding=3 cellspacing=6 border=1 width=390 height=90 bgcolor=white style='border-radius: 5px; position: relative; margin-top: 16%; margin-left: 35.6%;'");
	document.write(" style='border: 1px solid #666666;'><tr style='border: 1px #000000;'> <form name=f action=# onsubmit='return false;'>");
var linha=0;
for(i=65; i < 91; i++){
    if(linha == 8) {
       linha=0;
       document.write("</tr><tr style='border: 1px #000000;'>");
    }
    document.write("<td align=center valign=middle width=15  style='border: 1px solid white;' bgcolor=white ");
    document.write(" onmouseover=style.backgroundColor='white;' onmouseout=style.backgroundColor='white' > ");
    document.write("<input type=submit name='" + String.fromCharCode(i)+"'  onclick=\"jogar('" + String.fromCharCode(i));
    document.write("');document.f."+ String.fromCharCode(i)+".style.display ='none';\" class=teclado value=" + String.fromCharCode(i) + " ></td>");
    linha++;
}
    document.write("</tr></form></table>");*/


