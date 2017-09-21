import chai from 'chai'
import chaiHttp from 'chai-http';
let should = chai.should();

chai.use(chaiHttp);

let token
describe('Testing PlaceService', () => {


  before((done) => {
    request
        .post('/login')
        .send({name: 'paulo', password:'123123'})
        .end((err, res) => {
            should.exist(res)
            token = res.body.token
          done(err)
        })
  })

      it('Shoul return places (200) ', (done) => {
        request
            .get('/places')
            .set('Authorization', 'JWT ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.be.eql(200)
              expect(res.body).to.be.a('array')
              done(err)
            })
        })

      it('Shoul return 401 (Unauthorized) ', (done) => {
        request
            .get('/places')
            .end((err, res) => {
              expect(res.statusCode).to.be.eql(401)
              done(err)
            })
        })

      it('Shoul return winner (200) ', (done) => {
        request
            .get('/winner')
            .set('Authorization', 'JWT ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.be.eql(200)
              expect(res.body).to.be.a('object')
              done(err)
            })
        })      


});