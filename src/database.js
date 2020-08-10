const mongoose = require('mongoose')

const URI = 'mongodb+srv://rootdev:devroot@social.4lhk1.mongodb.net/SocialData?retryWrites=true&w=majority'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Database is connected')
})