
/**
 * Site router controllers
 */

/**
 * Module dependencies
 */

import {render, redirect} from 'lib/routes/helpers';

export const appStack = []
  .concat([
    render('index', {
      title: 'Ludum Dare Stats',
      description: 'API Stats for Ludum Dare',
      url: 'http://ldstats.info'
    })
  ]);

export const setAuthor = (req, res, next) => {
  res.locals.run_author = req.params.author;
  next();
};