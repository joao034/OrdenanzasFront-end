export class Usuario{
    id_usuario? : string
    clave ?: string
    nombre?: string 
    id_departamento_per ?: number
    id_permiso_per ?: number
    correo ?: string

    constructor(){
    }

    /*constructor(id_usuario : string, clave: string){
        this.id_usuario = id_usuario
        this.clave = clave
    }*/
}