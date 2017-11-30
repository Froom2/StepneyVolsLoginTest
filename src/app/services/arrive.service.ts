import * as firebase from 'firebase';

export class ArriveDepartService {
    arrivedUserName: string;
    arrivedDateTime: Date;


    arriveUser(signedInUser: string) {

        this.arrivedUserName = signedInUser;
        this.arrivedDateTime = new Date();

        var nowString = this.arrivedDateTime.toJSON()
        console.log(nowString);


        firebase.database().ref('arrival').push({
            name: this.arrivedUserName,
            dateTime: nowString
        });
    }

    departUser(signedInUser: string) {
        
                this.arrivedUserName = signedInUser;
                this.arrivedDateTime = new Date();
        
                var nowString = this.arrivedDateTime.toJSON()
                console.log(nowString);
        
        
                firebase.database().ref('departure').push({
                    name: this.arrivedUserName,
                    dateTime: nowString
                });
            }

    getArrivedUser() {
        return this.arrivedUserName
    }
}