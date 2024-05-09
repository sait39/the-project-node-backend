const express = require('express');
require('./mongooseConnect');

const noteRoutes = require('./routes/noteRoutes');
const testRoutes = require('./routes/testRoutes');

const app = express();
const port = 3000;

app.use('/api/notes', noteRoutes);
app.use('/', testRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.post('/notes');
