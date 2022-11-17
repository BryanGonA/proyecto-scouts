import RegisterContainer from './RegisterContainer'
import RegisterDropdown from './RegisterDropdown'
import RegisterDrops from './RegisterDrops'
import {FormDataHealth, FormParentsData, FormPersonalData, FormPhoto} from './forms'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useCurrentUser } from '~/hooks/use-current-user'
import { useRouter } from 'next/router'
import { redirectByRole, Role } from '~/lib/utils'

export interface Parent {
    name?: string,
    lastName?: string,
    phoneParent?: string,
    relationship?: string,
    email?: string,
    professional?: string,
    company?: string
}

interface UserDetails {
    homePlace?: string,
    sex?: string,
    weight?: number,
    stature?: number,
    homeAddress?: string,
    phoneUser?: string,
    institute?: string,
    timeShift?: string,
    currentCourse?: string,
    calendary?: string,
    bloodType?: string,
    rh?: string,
    eps?: string,
    attentionSite?: string,
    entryBranch?: string,
    receivingBoss?: string,
    recommended?: string
}

export interface Intervention {
    typeIntervention?: string,
    whichIntervention?: string,
}

export interface Disease {
    nameDisease?: string,
    whichDisease?: string,
}

interface DataHealth {
    allergies?: boolean,
    noteAllergies?: string,
    disease?: boolean,
    noteDiseases?: string,
    medicine?: boolean,
    doseTime?: string,
    specification?: string,
    observations?: string,
    noteMedicine?: string,
    healthSecure?: string,
    cardNumber?: string,
    privateDoctor?: string,
    doctorTelephone?: string,
    nameOneEmergency?: string,
    telephoneOneEmergency?: string,
    nameTwoEmergency?: string,
    telephoneTwoEmergency?: string,
    diseases?: Disease[],
    interventions?: Intervention[],
}

interface Responsible {
    nameResponsibleSign: string,
    phoneResponsible: string
}

interface ProfileImage {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    destination: string,
    filename: string,
    path: string,
    size: string
}

export interface Inputs {
    photo?:any,
    documentType?: string,
    document?: string,
    name?: string,
    lastName?: string,
    email?: string,
    password?: string,
    homeAddress?: string,
    birthDate?: Date,
    status?: boolean
    parents?: Parent[],
    userDetails?: UserDetails,
    dataHealth?: DataHealth,
    profileImage: ProfileImage,
    responsibleSign?: Responsible
}

export interface RegisterFormProps {
    values: Inputs,
    setValues: Dispatch<SetStateAction<Inputs>>
}

export default function RegisterForm() {


    const defaultValues : Inputs = {
        userDetails: {
            entryBranch: "TEMPORAL",
            receivingBoss: "",
            recommended: ""
        },
        profileImage: {
            fieldname: "",
            originalname: "",
            encoding: "",
            mimetype: "",
            destination: "",
            filename: "",
            path: "",
            size: ""
        },
        dataHealth: {
            allergies: false,
            disease: false,
            medicine: false,
            doseTime: "",
            specification: "",
            healthSecure: "",
            cardNumber: "",
            privateDoctor: "",
            doctorTelephone: "",
            noteAllergies: "",
            noteMedicine: "",
            noteDiseases: ""
        }
    }

    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
    const router = useRouter()

    useEffect(() => {
        if (!loadingUser) {
            if (user.roles) {
                redirectByRole(router, Role[Role[user.roles.id-1]])
            }
        }
    }, [user])
    

    const [values, setValues] = useState<Inputs>(defaultValues)
    
    return (
        <RegisterContainer title="Hoja de Vida Scout" values={values} setValues={setValues}>
            <FormPhoto values={values} setValues={setValues}/>
            <RegisterDrops>
                <RegisterDropdown id="personalData" title="Datos personales" active>
                    <FormPersonalData values={values} setValues={setValues}/>
                </RegisterDropdown>
                <RegisterDropdown id="parentsData" title="Datos acudientes">
                    <FormParentsData values={values} setValues={setValues}/>
                </RegisterDropdown>
                <RegisterDropdown id="healthData" title="Datos médicos">
                    <FormDataHealth values={values} setValues={setValues}/>
                </RegisterDropdown>
            </RegisterDrops>
        </RegisterContainer>
    )
    
    
}