const express = require('express');
const { upload } = require('./controllers/userController');
const app = express();

const userUpload = require('./routes')

/* localhost:3001/user/upload */

app.use('/user', userUpload)

app.listen(3001, () => {
    console.log('eae caraiu...')
});