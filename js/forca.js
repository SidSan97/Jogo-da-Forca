/*
-------------------
      FORCA em HTML 0.1 beta; 
      By: Sidnei Santiago
      sidnei1.8santiago@hotmail.com 
               -------------------    

*/

  //  BIBLIOTECA DE PALAVRAS  
  var palavras = new Array();
  palavras[0]  = "carteira";
  palavras[1]  = "brasil";
  palavras[2]  = "sidnei";
  palavras[3]  = "bahia";
  palavras[4]  = "salvador";
  palavras[5]  = "assembly";
  palavras[6]  = "marco";
  palavras[7]  = "helio";
  palavras[8]  = "exodo";
  palavras[9]  = "milan";
  palavras[10] = "verao";
  palavras[11] = "ysmine";
  palavras[12] = "windows";
  palavras[13] = "ufba";
    
    //BIBLIOTECAS COM AS DICAS
    var dica = new Array();
        dica[0]  = "Põe dinheiro";
        dica[1]  = "País";
        dica[2]  = "Nome";
        dica[3]  = "Primeiro campeão brasileiro";
        dica[4]  = "Cidade nordestina";
        dica[5]  = "Linguagem de programação";
        dica[6]  = "Mês do ano";
        dica[7]  = "Elemento químico gasoso";
        dica[8]  = "Segundo livro da Biblia";
        dica[9]  = "Time europeu"
        dica[10] = "Estação do ano";
        dica[11] = "Nome feminino";
        dica[12] = "Sistema Operacional";
        dica[13] = "Sigla de universidade federal";

	// Variaveis GLOBAIS
    var  k;
    //var iconte = Math.floor(Math.random()*2);
    var visor  = document.getElementById('visor');
    var dicas = document.getElementById('dicas');
    var erro = 1;
    var iconte = Math.floor(Math.random()*13);
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

//Se o input "Jogar em equipe/individual" for selecionado, irá chamar essa função
function listaJogadores()
{
    document.getElementById('tablePlayerPont').style.display = 'block';
    document.getElementById('titlePont').style.display       = 'block';
    document.getElementById('btnAddMais').style.display      = 'block';
}

//Se o input "Fechar lista" for selecionado, irá chamar essa função
function fecharLista()
{
    document.getElementById('tablePlayerPont').style.display = 'none';
    document.getElementById('titlePont').style.display       = 'none';
    document.getElementById('btnAddMais').style.display      = 'none';
}

//Se o botão "add mais" for clicado, irá chamar essa função
function adcElemento () { 
 
    var novoElem   = document.createElement('tr');
    var novoElem2  = document.createElement('td');
    var input      = document.createElement('input');
    var select     = document.createElement('select'); 
    let num = -1;
    
    novoElem2.appendChild(input);
    novoElem2.appendChild(select);

    for(let i=0; i<=13; i++)
    {
        num = num + 1;
        var option = document.createElement('option');
        var valor = document.createTextNode(num);

        select.appendChild(option);
        option.appendChild(valor);
    }

//
// Recuperando a lista
//
    var table = document.getElementsByTagName('table')[3];

//
// Recuperando os itens
//
    var itens = document.getElementsByTagName('ul');

//
// Inserindo com insertBefore()
//
    table.insertBefore(novoElem, itens[0]);
    table.insertBefore(novoElem2, itens[0]);
}
	
function sorteio() 
{
    var BorderTable = "<table cellpadding=2  ";
    BorderTable = BorderTable + "cellspacing=4 border=0 width=390 ";
    BorderTable = BorderTable + " height=40 bgcolor=#000000 style='border: ";
    BorderTable = BorderTable + " 1px solid #666666; width: 100%;'><tr>";

    for(k = 0; k < palavras[iconte].length; k++)
    {
   		p[k] = k;
        BorderTable = BorderTable + "<td style='border: 0px solid #000000;' ";
        BorderTable = BorderTable + " bgcolor=#000000 align=center ";
        BorderTable = BorderTable + " valign=middle class=visao> __ </td>";
	}
        BorderTable = BorderTable + "</tr></table><br>";
        visor.innerHTML = BorderTable;
        dicas.innerHTML = "Dica: " + dica[iconte];
        document.getElementById('palavraSec').innerHTML = "Palavra é: " + palavras[iconte].toUpperCase();
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
        document.getElementById('enforcadoFrase').style.display = 'block';
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
      t = t + " 1px solid #666666; width: 100%;'><tr>";
	  
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
        visor.innerHTML = t;
        var temp = document.getElementById('tempJogo');
        temp.innerHTML = "Tempo de jogo foi de " + itempodejogo + " segundos";
	   
     if(coleta == palavras[iconte].toUpperCase()){

        document.getElementById('msgGanhou').style.display = 'block';
        document.getElementById('newGame').style.display = 'block';
        document.getElementById('palavraSec').style.display = 'block';
        temp.style.display = 'block';
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


