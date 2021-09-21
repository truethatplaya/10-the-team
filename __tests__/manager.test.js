const Manager = require("../lib/Manager");

describe("Manager class constructor", () => {
  it("New manager creation", () => {
    const teamMember = new Manager("Alina", "1", "alina@gmail.com", "4126");
    expect(teamMember.name).toEqual("Alina");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("alina@gmail.com");
    expect(teamMember.officeNumber).toEqual("4126");
  }),
    it("getName Function", () => {
      const teamMember = new Manager("Alina", "1", "alina@gmail.com", "4126");
      expect(teamMember.getName()).toEqual("Alina");
    });
});
