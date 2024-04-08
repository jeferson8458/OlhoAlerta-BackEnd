const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const denunciasRouter = require('./routes/denuncias');

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Rota para denúncias
app.use('/denuncias', denunciasRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
