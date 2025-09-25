const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    const appMessage = process.env.AppMessage || "Default message";
    res.send(appMessage);
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
