const nombreBuscar= document.getElementById("buscador")


function Paciente(nombre, rut, edad, diagnostico){
    this.nombre = nombre;
    this.rut = rut;
    this.edad=edad;
    this.diagnostico= diagnostico;
    // this.hobbie ="sin hobbie";
    
    // this.setHobbie = function(hobbie){
    //     hobbie = this.hobbie;
    // }

    // this.getHobbie = function(){
    //     return this.hobbie;
    // }

    Paciente.prototype.getNombre = function(){
        return  this.nombre  
    }
    Paciente.prototype.getRut = function(){
        return  this.rut 
    }
    Paciente.prototype.getEdad = function(){
        return  this.edad  
    }
    Paciente.prototype.getDiagnostico = function(){
        return  this.diagnostico 
    }


    Paciente.prototype.Search= function(nombreBucar){
        return baseDatos.filter(persona => persona.nombre==nombreBucar)
    }
        


    // this.nombrarInv = function(){
    //     return rut + " " +nombre ;
    // }
}