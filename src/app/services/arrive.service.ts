import * as firebase from 'firebase';
import {Visit} from '../models/visit'
import {VolunteerType} from '../models/volunteerType'
import {Person} from '../models/person'

export class ArriveDepartService {

    personId: string

    addPersonAndReturnId(
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        volunteerType: VolunteerType,
        visits: Visit[]
    ): Promise<string> {

        const person = new Person(
            firstName,
            lastName,
            dateOfBirth,
            volunteerType,
            visits
        )

        return firebase.database().ref('people').push({
            person
        }).then(
            person => person.key,
            err => ''
        )

    }

    checkIfUserExists(){}

    addVisitToPerson(
        personId: string,
        visit: Visit
    ) {

        firebase.database().ref('person').child(personId).child('visits').push({
            visit
        });
        
    }







    // departUser(signedInUser: string) {
        
    //             this.arrivedUserName = signedInUser;
    //             this.arrivedDateTime = new Date();
        
    //             var nowString = this.arrivedDateTime.toJSON()
    //             console.log(nowString);
        
        
    //             firebase.database().ref('departure').push({
    //                 name: this.arrivedUserName,
    //                 dateTime: nowString
    //             });
    //         }

    // getArrivedUser() {
    //     return this.arrivedUserName
    // }
}