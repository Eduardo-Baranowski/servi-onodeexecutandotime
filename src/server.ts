import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import routes from './routes';
// import Cliente from './entities/Cliente';
// import { getRepository } from 'typeorm';

import { createConnection } from './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
});

createConnection()
  .then(async () => {
    app.listen(process.env.PORT, () => {
      console.log('🚀 Server up and running');
    });
  })
  .catch((err) => {
    console.log('err :>> ', err);
    console.log('Erro ao conectar ao banco de dados');
  });

  // const clientesRepository = getRepository(Cliente);
  // const CronJob = require('cron').CronJob
  // const job = new CronJob('* * * * * *', async () => {
  //   const checkClienteSync = await clientesRepository.find({
  //     where: {sincronizadoGestor: 0}
  //   });
  // console.log(checkClienteSync);
  // console.log('tarefa agendada')
  // }, null, true, 'America/Sao_Paulo')
