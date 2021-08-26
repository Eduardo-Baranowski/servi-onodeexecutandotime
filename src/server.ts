import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import routes from './routes';
import Cliente from './entities/Cliente';
import { getRepository } from 'typeorm';
import axios from 'axios';

import { createConnection } from './database';
import api from './utils/api';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

function clientesSync() {
  axios.get('http://localhost:44350/unitech/api/contato')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
  const clientesRepository = getRepository(Cliente);
  const CronJob = require('cron').CronJob;
  const job = new CronJob('* * * * *', async () => {
    const checkClienteSync = await clientesRepository.find({
      where: {sincronizadoGestor: 0}
    });

  for ( const Cliente of checkClienteSync){
    Cliente.sincronizadoGestor = true;

    console.log(Cliente, "#####");
    api.post("unitech/api/contato/gravar", Cliente
    )
    .then(res => {
      console.log(`statuscode: ${res.status}`)
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    })
  }

  // console.log(checkClienteSync);
  // console.log('tarefa agendada')
  }, null, true, 'America/Sao_Paulo');
}


app.listen(3333, () => {
createConnection()
  .then(async () => {
    app.listen(process.env.PORT, () => {
      clientesSync();
      console.log('🚀 Server up and running');
    });
  })
  .catch((err) => {
    console.log('err :>> ', err);
    console.log('Erro ao conectar ao banco de dados');
  });


});
