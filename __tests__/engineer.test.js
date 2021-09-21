const Engineer = require("../lib/Engineer");

describe("Engineer class constructor", () => {
  it("New engineer creation", () => {
    const teamMember = new Engineer(
      "Alina",
      "1",
      "alina@gmail.com",
      "truethatplaya"
    );
    expect(teamMember.name).toEqual("Alina");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.gitHubUsername).toEqual("truethatplaya");
  }),
    it("getName Function", () => {
      const teamMember = new Engineer(
        "Alina",
        "1",
        "alina@gmail.com",
        "truethatplaya"
      );
      expect(teamMember.getName()).toEqual("Alina");
    });
});
