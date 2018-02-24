const express = require('express');
const bodyParser = require('body-parser');

require('./mongoose');

const { Ips } = require('./ips');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello!')	
});

app.get('/:name', async (req, res) => {
    const { name } = req.params;

	if (name === "favicon.ico") {
	    res.status(200).send();
	    return;
    }

    let updatedAt = new Date().getTime();

    //console.log(name, updatedAt);

    try {
        let server = await Ips.findOneAndUpdate({ name }, { updatedAt });

        if (!server) {
            const newServer = new Ips( { name, updatedAt } );
            await newServer.save();
        }

        res.status(200).send();

    } catch (err) {
        res.status(400).send();
    }
});

app.listen(8090, () => {
    console.log(`Started on port 8090`);
});
