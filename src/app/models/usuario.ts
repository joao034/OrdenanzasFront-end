export class Usuario{
    id_usuario : string
    clave : string
    nombre : string 
    id_departamento_per : number
    id_permiso_per : number
    correo : string

    //campos obtenidos por los joins
    nombrePermiso !: string
    nombreDepartamento !: string
    
    constructor(){
    }
}