const express = ('express');
const morgan = ('morgan');
const mongoose =('mongoose');
const cors=('cors')

const app = express();

mongoose.connect('mongod://localhost:auth/auth', {useNewUrlParser: true, useCreateIndex: true});

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extrended:true}));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

const routes=require('./routes');
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server on Port ${PORT}`));