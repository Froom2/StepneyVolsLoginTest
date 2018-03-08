import {VolunteerType} from './volunteertype';
import {Visit} from './visit'

export class Person {
    
    constructor (
        public firstName: string,
        public lastName: string,
        public dateOfBirth: Date,
        public volunteerType: VolunteerType,
        public visits: Visit[]
    ) {}
    
}