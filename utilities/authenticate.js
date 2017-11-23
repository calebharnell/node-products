const authenticate = (req, res, next) => {
  if (req.query.password === 'password') {
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = authenticate;
