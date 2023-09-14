import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { Time } from "./time";
import { User } from "./user";


const app = new App()
async function japajspo(){
    try{
        const bike = new Bike('mountain bike', 'mountain', 
            123, 500, 100.5, 'desc', 5, [])
        const user = new User('Maria', 'maria@mail.com', '1234')
        const today = new Date()
        const now = new Time(1,20)

        const twoDaysFromToday = new Date()
        twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        const sevenDaysFromToday = new Date()
        sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)
        const rent1 = Rent.create([], bike, user, now)
        const user2 = new User('Maria Clara', 'maria@gmail.com', '3123')


        //const app = new App()
        //app.registraBike(bike)

            await app.addUser(user)

        //app.rentBike(bike, user, today, twoDaysFromToday)

        console.log(user.password)
        // app.addUser(user2)
        // console.log(app.findUser('maria@mail.com'))
    } catch(error){
        console.log('burro')
    }
}
japajspo()