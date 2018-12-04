export interface History {
    userId: string,
    doctorId: string,
    log: Array<string>,
    id: string,
    nombrePaciente?:string,
    nombreDoctor?:string
}