/* jshint esversion: 6*/
var Animal = function(numero_patas=2,carnivoro=true,pelaje=true,numero_ojos=2,nombre="humano"){
  return{
    nombre:nombre,
    numero_patas:numero_patas,
    carnivoro:carnivoro,
    pelaje:pelaje,
    numero_ojos:numero_ojos,
    comer:function(){
      if(this.carnivoro===true){
        return "carnivoro";
      }if(this.carnivoro===false){
        return "no carnivoro";
      }
    }
  };//return
};//Animal
var jirafa = new Animal("jirafa",4,false,true,2);
var perro = new Animal("perro");

var Pokemon = function(tipo=2,poder=true,energia=true,fuerza=2){
  var parent = new Animal();
  var object={
    tipo:tipo,
    poder:poder,
    energia:energia,
    fuerza:fuerza,
    atacar:function(){
      if(energia/fuerza>1){
        return "gano";
      }else{
        return "perdió";
      }
    }
  };
  return object;
};//Pokemon
