const Employee = require("../lib/Employee");

describe("Employee class constructor", () => {
  it("New employee creation", () => {
    const teamMember = new Employee("Alina", "1", "alina@gmail.com");
    expect(teamMember.name).toEqual("Alina");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("alina@gmail.com");
  }),
    it("getName Function", () => {
      const teamMember = new Employee("Alina", "1", "alina@gmail.com");
      expect(teamMember.getName()).toEqual("Alina");
    });
});
