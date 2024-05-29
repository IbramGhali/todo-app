const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); // Use CommonJS require

chai.use(chaiHttp);
const { expect } = chai;

describe('To-Do List API', () => {
    it('should get all todos', (done) => {
        chai.request(app)
            .get('/todos')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should create a new todo', (done) => {
        const newTodo = { task: 'Learn Jenkins' };
        chai.request(app)
            .post('/todos')
            .send(newTodo)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('task', 'Learn Jenkins');
                done();
            });
    });
});
