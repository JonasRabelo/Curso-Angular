//=======================================================
//Keyof
/*
export interface Professor {
   name: string;
   age: string;
}


type ProfessorProperties = keyof Professor // name | age
const professorProperties: ProfessorProperties = "name"
*/
//=======================================================
//Interssections - Serve para combinar tipos de objetos existentes
/*
interface Point {
    x: number;
    y: number;
}

interface Point {
    z: number
}

type Named = {
    name: string
}

//Interssection de Point com Named
type NamePoint = Point & Named;

const namedPoint: NamePoint = {
    name: "",
    x: 13,
    y: 20,
    z: 23
}
*/
//Indexed Access Types
/*
export interface CourseSubject {
    id: number;
    name: string;
}

export interface Professor {
    name: string;
    age: number;
    subjects: CourseSubject[]
}

export type ProfessorName = Professor['name'] // string

export type ProfessorCourseSubjects = Professor['subjects'] // CourseSubject[]

export type ProfessorCourseSubjectId = Professor['subjects'][number]['id'] // number

export type ProfessorNameAgeTypes = Professor['name' | 'age'] // string | number

export type ProfessorPropertyTypes = Professor[keyof Professor] // string | number | CourseSubject[]
*/

//Indexed Signatures
/*
export interface CacheById {
    [id: string]: any
}

const cache: CacheById = {
    "abc": "alan",
    "dfg": "nathan"
}

export type PersonType = "professor" | "student" | "admin"

export type CacheByUnion = {
    [P in PersonType]: any
}

const cacheByUnion: CacheByUnion = {
    admin: "abc",
    professor: 123,
    student: {}
}
*/

//Narrowing - Analisa o fluxo de código e analisa o tipo de variável
function truthinessStringCheck(x: string | null |undefined){
    if(x) {
        x // string
    }else {
        x // "" | null | undefined
    }
}

//Discriminated Unions
type Square = {
    type: 'square';
    width: number;
}

type Circle = {
    type: 'circle';
    radius: number;
}

//união com discriminante na propriedade type
type Shape = Square | Circle;

function calculateArea(shape: Shape){
    switch (shape.type){
        case 'circle': {
            return shape.radius * Math.PI * 2;
        }
        case 'square': {
            return shape.width * shape.width;
        }
        
    }
}