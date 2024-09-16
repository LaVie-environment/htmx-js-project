const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define a route for HTMX to hit
app.get('/hello', (req, res) => {
    res.send('<div>Hello from the server!</div>');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
