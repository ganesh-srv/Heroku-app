const express = require('express');
path = require('path');
const app = express();
app.use(express.static('./dist/heroku-app'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/heroku-app/index.html'));

});
app.listen(8080, () => {
    console.log('server started');

})