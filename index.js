const express = require('express');
const connectDB = require('./config/db.js')
const cors = require('cors')

const app = express();
connectDB()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello world!'));

const messages = require('./routers/api/messages.js')
app.use('/api/messages', messages)

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));