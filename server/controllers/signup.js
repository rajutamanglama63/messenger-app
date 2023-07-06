const signup = (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username === "") {
      return res.status(400).json({ msg: "Username must not be empty!" });
    } else if (email === "") {
      return res.status(400).json({ msg: "Email must not be empty!" });
    } else if (password === "") {
      return res.status(400).json({ msg: "Password must not be empty!" });
    } else {
      console.log({ username, email, password });
      return res.status(200).json({ msg: "Registered successfully!" });
    }
  } catch (error) {
    console.log("signup: ", error);
  }
};

module.exports = signup;
