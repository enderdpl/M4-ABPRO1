

function Consultorio(nombre,pacientes){
    this.nombre=nombre;
    this.pacientes=pacientes;

    Consultorio.prototype.getNombre = function(){
        return  this.nombre  
    }
    Consultorio.prototype.getPacientes = function(){
        return  this.pacientes  
    }

    Consultorio.prototype.search= function(nombrePaciente){
        return this.pacientes.filter(paciente => paciente.getNombre() === nombrePaciente)
    }



}