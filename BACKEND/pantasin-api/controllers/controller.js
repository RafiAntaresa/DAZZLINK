const {
  insertPantasin,
  getPantasin,
  updatePantasin,
  deletePantasin,
} = require("../models/pantasin-model");

const { validatePantasin } = require("../utils/validation");
const ErrorResponse = require("../utils/errorResponse");

// create pantasin
exports.createData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySql = "INSERT INTO mitra SET ?";

  // validasi
  var errors = validatePantasin(data);
  if (errors) {
    return next(new ErrorResponse(errors[0], 400));
  }

  // masukkan ke dalam model
  insertPantasin(res, querySql, data, next);
};

// show pantasin
exports.readData = (req, res, next) => {
  // buat query sql
  const querySql = "SELECT * FROM mitra";

  // masukkan ke dalam model
  getPantasin(res, querySql, next);
};

// update pantasin
exports.updateData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySearch = "SELECT * FROM mitra WHERE id = ?";
  const queryUpdate = "UPDATE mitra SET ? WHERE id = ?";

  // masukkan ke dalam model
  updatePantasin(res, querySearch, queryUpdate, req.params.id, data, next);
};

// delete pantasin
exports.deleteData = (req, res, next) => {
  // buat query sql untuk mencari data dan hapus
  const querySearch = "SELECT * FROM mitra WHERE id = ?";
  const queryDelete = "DELETE FROM mitra WHERE id = ?";

  // masukkan ke dalam model
  deletePantasin(res, querySearch, queryDelete, req.params.id, next);
};
