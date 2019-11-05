import unless from 'express-unless';

import { TOKEN, HTTP_CODES } from '../config/config.js';

const { secret, headerName } = TOKEN;

const { HTTP_INVALID_TOKEN, HTTP_NOT_AUTHORIZED } = HTTP_CODES;

function validateToken(token) {
  // <------- PUT YOUR AUTH LOGIC IN THIS FUNCTION

  return secret === token;
}

function middleware(req, res, next) {
  next();
}

middleware.unless = unless;

export default middleware;
