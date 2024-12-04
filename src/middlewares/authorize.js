
const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const btoken = req.header('Authorization');
   const token = btoken.split(' ')[1].replace(/"/g, '');
  console.log("Extracted Token:", token);
  console.log(token)
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token)
    console.log("in")

    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

exports.authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
};
