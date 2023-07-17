const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json({ users });
    } catch (error) {
      console.log("getUsers: ", error);
    }
  },
};
