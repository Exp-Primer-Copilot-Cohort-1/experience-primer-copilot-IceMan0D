// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.json
const comments = require('./comments.json');

// Create endpoint for comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// Path: index.js
// Import comments.js
const comments = require('./comments');

// Call the endpoint /comments
fetch('http://localhost:3000/comments')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

// Start the server
// node index.js

// Output
// Server started at http://localhost:3000
// [
//     { id: 1, name: 'John', comment: 'Hello' },
//     { id: 2, name: 'Jane', comment: 'Hi' },
//     { id: 3, name: 'Joe', comment: 'Hey' }
// ]

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.json
const comments = require('./comments.json');

// Create endpoint for comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// Path: index.js
// Import comments.js
const comments = require('./comments');

// Call the endpoint /comments
fetch('http://localhost:3000/comments')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

// Start the server
// node index.js

// Output
// Server started at http://localhost:3000
// [
//     { id: 1, name: 'John', comment: 'Hello' },
//     { id: 2, name: 'Jane', comment: 'Hi' },
//     { id: 3, name: 'Joe', comment: 'Hey' }
// ]

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.json
const comments = require('./comments.json