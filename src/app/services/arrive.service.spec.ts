import {ArriveDepartService} from './arrive.service'
import {Visit} from '../models/visit'

describe('ArriveService', () => {

    const arriveDepartService = new ArriveDepartService

    describe('addVisitToPerson', () => {
        it('should do something if given something', () => {

            const visit = new Visit()

            arriveDepartService.addVisitToPerson('test', visit)
        })
    })
})