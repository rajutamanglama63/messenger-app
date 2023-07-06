const signin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "") {
      return res.status(400).json({ msg: "Email must not be empty!" });
    } else if (password === "") {
      return res.status(400).json({ msg: "Password must not be empty!" });
    } else {
      console.log({ email, password });
    }
  } catch (error) {
    console.log("signin err: ", error);
  }
};

module.exports = signin;
