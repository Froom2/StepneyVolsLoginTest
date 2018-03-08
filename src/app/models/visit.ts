import {VisitReason} from './visitReason'

export class Visit {
    
    constructor (
        public visitReason?: VisitReason,
        public arrival?: Date,
        public departure?: Date
    ) {}

}