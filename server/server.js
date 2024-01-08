const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

app.use('/api', require('./routes/apiRoutes'))
app.use('/auth', require('./routes/authRoutes'))

app.listen(3001, () => console.log("Server started on port 3001"))