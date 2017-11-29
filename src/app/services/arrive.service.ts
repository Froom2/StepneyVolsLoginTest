import * as firebase from 'firebase';

export class ArriveService {
    arrivedUser: string;
    arrivedDateTime: Date;


    arriveUser(signedInUser: string) {
        this.arrivedUser = signedInUser;

        
        this.arrivedDateTime = new Date();

        var nowString = this.arrivedDateTime.toJSON()
        console.log(nowString);


        firebase.database().ref('arrival').push({
            name: this.arrivedUser,
            dateTime: nowString
        });
    }

    getArrivedUser() {
        return this.arrivedUser
    }
}