
/**
 * Non-api related routes
 */

import {Router} from 'express';
import {appStack, setAuthor} from './controllers';
import {redirect} from '../helpers';

/**
 * Create and expose router
 */

 const app = Router();
 export default app;

/**
 * Define routes
 */

// Home ----------------------------
app.get('/', appStack);
app.get('/:author', setAuthor, appStack);