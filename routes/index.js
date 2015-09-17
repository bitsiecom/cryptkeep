
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cryptkeep | Bitsie' });
};

exports.terms = function(req, res){
  res.render('terms', { title: 'Terms of Service | Cryptkeep by Bitsie' });
};