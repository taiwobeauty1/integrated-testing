const { fetchData } = require('./fetchData');


describe("Testing Users", () => {
    it("should return 10 users", async () => {
        const users = await fetchData("users");
        expect(users.length).toBe(10);
    });

    it("should contain user with ID 4", async () => {
        const users = await fetchData("users");
        expect(users).toContainEqual({
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            address: {
              street: "Hoeger Mall",
              suite: "Apt. 692",
              city: "South Elvis",
              zipcode: "53919-4257",
              geo: {
                lat: "29.4572",
                lng: "-164.2990"
              }
            },
            phone: "493-170-9623 x156",
            website: "kale.biz",
            company: {
              name: "Robel-Corkery",
              catchPhrase: "Multi-tiered zero tolerance productivity",
              bs: "transition cutting-edge web services"
            },
          });
    });
});