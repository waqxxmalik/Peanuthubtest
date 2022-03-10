const request = require("supertest");
const app = require("./app");

let coinId;

describe("Test example", () => {
    test("GET /", (done) => {
      request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
          res.body.data.name = "Bitcoin";
          res.body.data.code = "BTC";
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
    // More things come here
  });
   
  describe("Test example", () => {
    // Hidden for simplicity
    test("PUT /update/:id", (done) => {
      request(app)
        request(app)
        .put(`/update/${coinId}`)
        .expect("Content-Type", /json/)
        .send({
          price: "42000.35",
        })
        .expect(200)
        .expect((res) => {
            res.body.data.name = "Bitcoin";
            res.body.data.code = "BTC";
            res.body.data.price = "42000.35"
          })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
    // More things come here
  });

