const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT||3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const phoneNumber = req.body['phone-number'];
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    

    if (phoneNumberRegex.test(phoneNumber)) {
        res.send(`Phone number ${phoneNumber} is in the correct format`);
    } else {
        res.send(`Phone number ${phoneNumber} is not in the correct format ddd-ddd-dddd`);
    }
});

app.listen(port, () => {
    console.log(`Server is being hosted on http://localhost:${port}`);
});
