/*
var joias = 001;
var livros = 111;
var eletronicos = 333;
var bebidas = 555;
var brinquedos = 888;

let centrooeste_origem = [201-299];
let nordeste_origem = [300-399];
let norte_origem = [400-499];
let sudeste_origem = [001-099];
let sul_origem = [100-199];

let centrooeste_destino = [201-299];
let nordeste_destino = [300-399];
let norte_destino = [400-499];
let sudeste_destino = [001-099];
let sul_destino = [100-199];

const cod_loggi = 555;

var cod_vendedor = "";
*/

   function validar() {

      var tipo_produto = document.getElementById("tipo_produto").value;
      const produto_sem_despacho = ["001"," 111", "333", "555", "888"]
      if (produto_sem_despacho.indexOf(tipo_produto) <= -1){
         alert("Produto fora da Lista");
         return false
      }
     
      var regiao_origem = document.getElementById("regiao_origem").value;

      if (tipo_produto == "001" && regiao_origem >= "201" && regiao_origem <= "299"){
         alert("Região: Centro-oeste Não despachar");
         return false
      }
      var cod_vendedor = document.getElementById("cod_vendedor").value;
      if (cod_vendedor == "367"){
      alert("Vendedor com CNPJ INATIVO");
      return false
      }

      alert("Preparar pacote para envio");
      return true
   }

/*
function identifica1 (){

Identificar a região de destino de cada pacote, com totalização de pacotes (soma região)


function identifica2 (){

   /*saber quais pacotes possuem códigos de barras válidos e/ou inválidos

}
function identifica3 (){

   /*Identificar os pacotes que tem como origem a região sul
    e briquedos em seu conteúdo


function identifica4 (){

   /*Listar os pacotes agrupados por região de destino
    (considerando apenas os pacotes válidos)

}
function identifica5 (){

   /*Listar o número de pacotes enviados por cada vendedor
    (considerando apenas os pacotes válidos)

}
function identifica6 (){

   /*Gerar o relatório/lista de pacotes por destino e por tipo
    (Considerando apenas os pacotes válidos)

}
function identifica7 (){

   /*Se o trasporte dos pacotes para o Norte passar pela região Centro-Oeste, quais são os pacotes que 
   devem ser despachados no mesmo caminhão*

}
function identifica8 (){

   /*Se todos os pacotes fossem uma fila, qual seria a ordem de carga para o Norte no caminhão
   para descarregar os pacotes da região Centro-Oeste primeiro

}
function identifica9 (){

   No item acima considerar que as jóias fossem sempre as primeiras a serem descarregadas*

}
function identifica_10 (){

   /*Listar os pacotes inválidos*

}
*/

/*
var pacote_1 = 288 355 555 123 888;
var pacote_2 = 335 333 555 584 333;
var pacote_3 = 223 343 555 124 001; (2) jóias e origem: cento oeste
var pacote_4 = 002 111 555 874 555;
var pacote_5 = 111 188 555 654 777; (1) PRODUTO NÃO CONSTA NA LISTA
var pacote_6 = 111 333 555 123 333;
var pacote_7 = 432 055 555 123 888;
var pacote_8 = 079 333 555 584 333;
var pacote_9 = 155 333 555 124 001; (2) jóias e origem: cento-oeste
var pacote_10 = 333 188 555 584 333;
var pacote_11 = 555 288 555 123 001;
var pacote_12 = 111 388 555 123 555;
var pacote_13 = 288 000 555 367 333; (3) vendedor: CNPJ INATIVO
var pacote_14 = 066 311 555 874 001;
var pacote_15 = 110 333 555 123 555;
var pacote_16 = 333 488 555 584 333;
var pacote_17 = 455 448 555 123 001;
var pacote_18 = 022 388 555 123 555;
var pacote_19 = 432 044 555 845 333;
var pacote_20 = 034 311 555 874 001;
*/