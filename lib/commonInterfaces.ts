export interface User {
    concept: string,
    id: number,
    name: string,
    lastName: string,
    email: string,
    documentType: string,
    document: string,
    birthDate: Date,
    createDate: Date,
    status: boolean,
    roles: {
        id: number,
        name: string
    },
    branches: {
        id: number,
        nameBranch: string
    }
}

export interface Adelanto {

    
    name: string
    createDate: Date
    branches: string
    leader : string
    description: string
}


export interface Branch {
    nameBranch: string,
    jefeRama: string
}

export interface CommonResponse {
    isLoading: boolean,
    error: any
}

export interface ResponseUser extends CommonResponse {
    user: User
}

export interface ResponseBranch extends CommonResponse {
    branch: Branch,
}