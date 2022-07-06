const app = require ('./app/app');;
const port = 3020;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});