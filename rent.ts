import { Bike } from "./bike";
import { Time } from "./time";
import { User } from "./user";

export class Rent {
    // static bike: Bike;
    // static user: User;
    // stati
    private constructor(
        public bike: Bike,
        public user: User,
        public startTime: Time,
        public endTime?: Time,
        public preço?: number
    ) {}

    static create(rents: Rent[], bike: Bike, user: User, startTime: Time): Rent {
        return new Rent(bike, user, startTime)
    }
   
    static valor(startTime: Time, endTime: Time): number{
        return ((endTime.hour * 60 + endTime.minute) - (startTime.hour * 60 + startTime.minute)) * 0,25
    }
}