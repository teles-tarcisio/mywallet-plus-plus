export function checkSignUpDataMiddleware(req, res, next) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    //throw Error ({ type: 'blank_field', message: 'algo errado'});
    return res.sendStatus(422);
  }

  res.locals.newUserData = { name, email, password};
  next();
}