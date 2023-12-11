const validate = require("validate.js");

exports.validatePantasin = (data) => {
  // user schema
  var constraint = {
    nama: {
      presence: {
        allowEmpty: false,
      },
    },
    foto: {
      presence: {
        allowEmpty: false,
      },
    },
    password: {
      presence: {
        allowEmpty: false,
      },
    },
    kontak: {
      presence: {
        allowEmpty: false,
      },
    },
    email: {
      presence: {
        allowEmpty: false,
      },
      email: true,
    },
    alamat: {
      presence: {
        allowEmpty: false,
      },
    },
  };

  return validate(data, constraint, { format: "flat" });
};
