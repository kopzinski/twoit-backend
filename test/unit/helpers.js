import chai from 'chai'
import td from 'testdouble'
import supertest from 'supertest'
import app from '../../app'

global.td = td
global.app = app
global.request = supertest(app)
global.expect = chai.expect