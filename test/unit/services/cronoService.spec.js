import  { timeIsOver } from  './../../../app/services/cronoService'

describe('Service: Crono', () => {

    let currenteDate
    let limitMinute
    let limitHour

    before(() => {
        currenteDate = new Date()
        limitMinute = currenteDate.getMinutes()
    });

    it('time should be over', () => {

        //given
        limitHour = currenteDate.getHours() - 1 

        //when
        const isOver = timeIsOver(limitHour, limitMinute)

        //then
        expect(true).to.be.eql(isOver)

    })


    it('time should NOT be over', () => {

        //given
        const limitHour = currenteDate.getHours() + 1

        //when
        const isOver = timeIsOver(limitHour, limitMinute)

        //then
        expect(false).to.be.eql(isOver)

    })

})