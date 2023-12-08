const express = require('express');
import { renderToString } from 'react-dom/server'
const app = express();
import { createElement } from 'react';
import Layout from '../client/index.js';
import { StaticRouter } from "react-router-dom/server";

app.use(express.static("public"));

app.get('/', (req, res) => {
    const html  = createElement(StaticRouter, {location: req.url}, createElement(Layout));
    const res1 = renderToString(html);
    res.send(res1);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
