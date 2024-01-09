export class User{
    id: string
    firstName: string
    lastName: string
    password: string
    email : string
    school : string

    constructor(id: string = '', firstName: string = '', lastName: string = '', password: string = '', email: string = '', school: string = '') {
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.email = email
        this.school = school
        this.id = id
    }

    toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            email: this.email,
            school: this.school
        }
    }

    //TODO from json
}


