export type Role = 'Gestão' | 'Desenvolvedor' |'Design' | 'Maker'

export type WorkerType = {
    name: string,
    role: Role,
    linkedin: string,
    image: string,
    github: string
}