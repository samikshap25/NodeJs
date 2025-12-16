const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.User;

exports.login = async (req, res) => {
  res.json({ message: "login working" });
};

exports.register = async (req, res) => {
  res.json({ message: "register working" });
};
