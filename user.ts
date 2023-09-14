import * as bcrypt from 'bcrypt'

export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public id?: string
    ) {}

        async cryptpassword(password: string): Promise <void>{
            const saltRound = 10
            this.password = await bcrypt.hash(password, saltRound)
        }

        async checkpassword(insertPassword: string): Promise <boolean>{
            return bcrypt.compare(insertPassword, this.password)
        }

}