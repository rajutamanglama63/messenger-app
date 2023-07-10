const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username === "") {
      return res
        .status(400)
        .json({ usernameErrMsg: "Username must not be empty!" });
    }
    if (email === "") {
      return res.status(400).json({ emailErrMsg: "Email must not be empty!" });
    }
    if (password === "") {
      return res
        .status(400)
        .json({ pswdErrMsg: "Password must not be empty!" });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      console.log(existingUser);
      return res
        .status(400)
        .json({ errMsg: "User with this email already exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hassedPswd = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hassedPswd,
      },
    });

    return res
      .status(201)
      .json({ successMsg: "Registered successfully!", newUser });
  } catch (error) {
    console.log("signup: ", error);
  }
};

module.exports = signup;
