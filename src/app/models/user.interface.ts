export interface User {
    role: 'admin' | 'patient' | 'doctor' | 'technical',
    uid: string,
    name: string,
    surname: string,
    dni: string,
    username: string,
    password: string
}