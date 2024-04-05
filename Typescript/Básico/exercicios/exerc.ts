interface Dados {
    nome: string,
    profissao: string,
    idade: number,
    interesses: string[]
}

var dadosJonas: Dados = {
    nome: "Jonas",
    profissao: "Analista de Desenvolvimento",
    idade: 26,
    interesses: ["Passeios", "Hinos", "Filmes", "Lazer", "Tecnologias"]
}

function returnsInterests(dados: Dados): string[] {
    return dados.interesses
}

enum Materias {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
}

interface Professor {
    nome: string,
    materias: Materias[]
}

var professorAlan: Professor = {
    nome: "Alan",
    materias: [Materias.Angular, Materias.Git, Materias.Typescript]
}

var professorNathan: Professor = {
    nome: "Nathan",
    materias: [Materias.Angular, Materias.Git]
}

var professores: Array<Professor> = [ 
    professorAlan,
    professorNathan
]

function teacherNames(professores: Array<Professor>): Array<string> {
    var namesTeachers: Array<string> = []
    for (let i = 0; i < professores.length; i++){
        namesTeachers.push(professores[i].nome)
    }
    return namesTeachers
}

function teacherMaterias(professores: Array<Professor>): Array<Materias> {
    var materiasTeachers: Array<Materias> = []
    for (let i = 0; i < professores.length; i++){
        for(let l = 0; l < professores[i].materias.length; l++){
            materiasTeachers.push(professores[i].materias[l])
        }
        
    }
    return materiasTeachers
}


function teacherOfTypescript(professores: Array<Professor>): Professor | undefined {
    return professores.find(x => x.materias.includes(Materias.Typescript)) 
}