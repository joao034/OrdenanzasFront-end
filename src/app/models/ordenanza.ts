export class Ordenanza {
    id_ordenanza : number
    fecha_ordenanza : any
    nombre : string
    palabras : string
    id_eje : number
    id_materia : number
    id_vigencia : number
    archivo = {
        nombreArchivo : '',
        base64textString : '',
        tamaño : 0
    }
}