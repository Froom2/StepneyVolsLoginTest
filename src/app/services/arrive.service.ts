import * as firebase from 'firebase';
import {Visit} from '../models/visit'
import {VolunteerType} from '../models/volunteerType'
import {Person} from '../models/person'

export class ArriveDepartService {

    personId: string;
    person: Person;

    addPersonAndReturnId(
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        volunteerType: VolunteerType,
        visits: Visit[]
    ): PromiseLike<string> {

        const person = new Person(
            firstName,
            lastName,
            dateOfBirth,
            volunteerType,
            visits
        );

        this.person = person;

        return firebase.database().ref('people').push({
            person
        }).then(
            p => this.personId = p.key,
            err => ''
        );

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

    departUser(userName: string) {
      // fill me in
    }





    // departUser(signedInUser: string) {
    //
    //             this.arrivedUserName = signedInUser;
    //             this.arrivedDateTime = new Date();
    //
    //             var nowString = this.arrivedDateTime.toJSON()
    //             console.log(nowString);
    //
    //
    //             firebase.database().ref('departure').push({
    //                 name: this.arrivedUserName,
    //                 dateTime: nowString
    //             });
    //         }

    getArrivedUser() {
        return this.person.firstName;
    }
}
