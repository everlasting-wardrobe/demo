export const IS_PROD = process.env.NODE_ENV === 'production';

export const SERVER_URL = IS_PROD
  ? // In production we want to redirect to /whatever
    ``
  : // In development we gotta redirect to localhost:3001/whatever tho
    'http://localhost:3000';

export const WORKING_PATH = '/test/test/';
