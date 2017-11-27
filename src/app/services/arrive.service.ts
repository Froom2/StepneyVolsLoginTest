export class ArriveService {
    signedInUser: string;

    addSignedInUser(signedInUser: string) {
        this.signedInUser = signedInUser
    }

    getSignedInUser() {
        return this.signedInUser
    }
}