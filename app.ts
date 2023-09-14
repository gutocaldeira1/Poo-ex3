import { Bike } from "./bike";
import { Rent } from "./rent";
import { Time } from "./time";
import { User } from "./user";
import crypto from "crypto";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    async addUser(user: User): Promise<void> {
        if (this.users.some(rUser => { return rUser.email === user.email })) {
            throw new Error('User with same email already registered.')
        }
        await user.cryptpassword(user.password)
        
        const newId = crypto.randomUUID()
        user.id = newId

        this.users.push(user)
    }

    findUser(email: string): User | undefined{
        return this.users.find(user => { return user.email === email})
    }

    registraBike(bike: Bike): void{
        if(this.bikes.some(rBike => {return rBike.id === bike.id})){
            throw new Error('Bike already registered')
        }
        const newId = crypto.randomUUID()
        bike.id = newId

        this.bikes.push(bike)
    }

    removeUser(user: User): void{
        this.users = this.users.filter((users) => user.email !== users.email)
    }

    rentBike(bike: Bike, user: User, startTime: Time): void{
        const array = this.rents.filter((bikes) => bike === bikes.bike)
        
        const newrent = Rent.create(array, bike, user, startTime)
        this.rents.push(newrent)
        
    }

    returnBike(bike: Bike, user: User, start: Time, end: Time): number{
        const filtro = this.rents.find(rent => rent.user === user && rent.bike === bike && rent.startTime === start)
        
        if(filtro){
            filtro.endTime = end
            filtro.preço = Rent.valor(start, end)
            return filtro.preço
        }

        throw new Error('rent dont exist')
    }

}