const bcrypt = require("bcrypt");

const auth = {};

auth.encryptPassword = (password) => {
  /** Returns the user password hashed. */
  try {
    /** Adds some random characters to the user password. */
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: "",
      message: error.message,
    });
  }
};

module.exports = auth;
