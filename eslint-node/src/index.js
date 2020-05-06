import http from 'http';
import cors from 'cors';
import path from 'path';
import express from 'express';
import routes from './routes';

const app = express();
const httpServer = http.Server(app);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, '/views'));

app.use(routes);

httpServer.listen(3000, '127.0.0.1', () => console.log('Server lintening on port 3000'));
