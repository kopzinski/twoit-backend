import chai from 'chai'
import chaiHttp from 'chai-http';
let should = chai.should();

chai.use(chaiHttp);

describe('Testing UserService', () => {

    let neverRepeatNumber
    before(() => {
        let dt = new Date()
        neverRepeatNumber = dt.getTime()
    });

    it('shoul add a new user', (done) => {
        //given
        let name = 'somename' + neverRepeatNumber
        let password = neverRepeatNumber

        //when
        request
            .put('/users')
            .send({name, password})
            .end((err, res) => {
                //then
                expect(res.statusCode).to.be.eql(200)
                expect(res.body.name).to.be.eql(name)
                done(err)
            });
    })

})