export class VisitReason {
    
    constructor(
        isRiding?: boolean,
        isVisiting?: boolean,
        isVolunteering?: boolean
    ) {

        this.isRiding = isRiding ? isRiding : false
        this.isVisiting = isVisiting ? isVisiting : false
        this.isVolunteering = isVolunteering ? isVolunteering : false

    }

    isRiding: boolean;
    isVisiting: boolean;
    isVolunteering: boolean;

}
