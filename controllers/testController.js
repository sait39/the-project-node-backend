const staticNotes = require('../test/data/staticNotes.json');

exports.getStaticNotes = (req, res) => {
  res.send(staticNotes);
};
