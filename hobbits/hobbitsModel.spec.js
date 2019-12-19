const Hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js");
// beforeEach is our way of truncating so when testing if adding works, it will reset the db
// no return because async/await
describe("hobbits model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });
  describe("insert()", () => {
    it("should add the hobbit to the database", async () => {
      // call insert, passing a hobbit object - like adding seed data
      await Hobbits.insert({ name: "Sam" });
      await Hobbits.insert({ name: "Gaffer" });

      // check the database directly
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });
  });
});

// examples of if you find yourself adding a hobbit every time
// function getFakeHobbit() {
//   return {
//     name: "sam"
//   };
// }

// function getList() {
//     return [

//     ]
// }
