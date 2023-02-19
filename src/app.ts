import express from 'express';

const app = express();

app.get('/', (_request, response) => {
    response.send('hello');
});

export default app;