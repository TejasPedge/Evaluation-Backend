const express = require('express');
const env = require('dotenv');
env.config();
const PORT = process.env.PORT || 8080;
const {connect} = require('./db');
const app = express();
const {UserRoutes} = require('./src/Routes/User.routes');
const {POST_Routes} = require('./src/Routes/Post.routes');

app.use(express.json());

app.use('/users',UserRoutes);
app.use('/posts',POST_Routes);





app.listen(PORT, async () => {
    try {
        await connect;
        console.log('')
        console.log('🚀 ✅ Connected to the Database');
        console.log('');
        console.log('🚀 ✅ Listening to the Server on port ',PORT);
        console.log('');
    } catch (error) {
        console.log('unable to Connect to the Database\n',error);
    }
})

