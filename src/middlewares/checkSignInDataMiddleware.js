/* eslint-disable import/prefer-default-export */

export function checkSignInDataMiddleware(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    // throw Error ({ type: 'blank_field', message: 'algo errado'});
    return res.sendStatus(422);
  }

  res.locals.userData = { email, password };
  return next();
}
