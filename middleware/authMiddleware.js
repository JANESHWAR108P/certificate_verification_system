const jwt = require("jsonwebtoken");

module.exports = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json("Access denied");

    try {
      const decoded = jwt.verify(token, "secret");
      if (roles.length && !roles.includes(decoded.role))
        return res.status(403).json("Forbidden");
      req.user = decoded;
      next();
    } catch {
      res.status(400).json("Invalid token");
    }
  };
};
