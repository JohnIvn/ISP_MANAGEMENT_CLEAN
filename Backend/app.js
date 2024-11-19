import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import signUpRoute from './Routes/signUpRoute.js'
import signInRoute from './Routes/signInRoute.js'
import authenticateToken from './authentication.js'
dotenv.config()

const app = express()


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());
app.use(express.static('Public'));

app.use('/signin', signInRoute);
app.use('/signup', signUpRoute);
app.use('/homepage', authenticateToken, (req, res) => {
    return res.status(200).json({message: 'you are authenticated'});
});


app.listen(process.env.PORT, () => {
    console.log('app is listening to port: ' + process.env.PORT);
})