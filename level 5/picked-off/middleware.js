module.exports = function addPropertyMiddleware(req, res, next) {
    req.newProperty = 'This is a new property added by the middleware';
    next();
  };