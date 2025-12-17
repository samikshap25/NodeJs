const { Role } = require("../models");

async function seedRoles() {
  const roles = ["USER", "ADMIN", "SUPERADMIN"];

  for (const role of roles) {
    await Role.findOrCreate({
      where: { name: role },
    });
  }
}

module.exports = seedRoles;
