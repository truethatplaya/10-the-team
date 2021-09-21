const Intern = require("../lib/Intern");

describe("Intern class constructor", () => {
  it("New intern creation", () => {
    const teamMember = new Intern("Alina", "1", "alina@gmail.com", "UCD");
    expect(teamMember.name).toEqual("Alina");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("alina@gmail.com");
    expect(teamMember.internSchool).toEqual("UCD");
  }),
    it("getName Function", () => {
      const teamMember = new Intern(
        "Alina",
        "1",
        "alina@gmail.com",
        "truethatplaya"
      );
      expect(teamMember.getName()).toEqual("Alina");
    });
});
