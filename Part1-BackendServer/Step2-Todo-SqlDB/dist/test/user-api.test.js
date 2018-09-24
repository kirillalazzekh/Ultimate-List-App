"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = require("../app");
//test /user route is working or not
describe("GET /Api", () => {
    it("should return 200 OK", () => {
        return request(app_1.App).get("/user")
            .expect(200);
    });
});
// //test post signup req in user route
//commit due to every time one its run it create a same use
// describe('POST /users', function() {
//   it('responds with json', function(done) {
//     request(App)
//       .post('/user/signup')
//       .send({name: 'Ali',email:'try@gmail.com',password:'200'})
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
//test post Login req in user route using sqldb
describe('POST /users/login using sqldb', function () {
    it('responds with json', function (done) {
        request(app_1.App)
            .post('/user/login')
            .send({ email: 'rana.naveed812@gmail.com', password: '124' })
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            done();
        });
    });
});
//test post Logout req in user route using sql
describe('POST logout sql test', function () {
    it('responds with json', function (done) {
        request(app_1.App)
            .post('/user/logout')
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            done();
        });
    });
});
//test post athenticate req in user route
describe('POST athenticate test sql', function () {
    it('responds with json', function (done) {
        request(app_1.App)
            .post('/user/authenticate')
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            done();
        });
    });
});
//# sourceMappingURL=user-api.test.js.map