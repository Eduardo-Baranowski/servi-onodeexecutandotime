
import { Router, request, response } from 'express';

import CreateClienteService from '../Services/CreateClienteService';

const clientesRouter = Router();

clientesRouter.post('/', async (request, response) => {
  try {
    const {
    nome,
    idTipoCliente,
    idEmpresa,
    nomeFantasia,
    tipoPessoa,
    docIdentificacao,
    rGInscricaoEst,
    fornecedor,
    sexo,
    estadoCivil,
    profissao,
    dataNascimentoAbertura,
    sincronizadoGestor,
    dataCadastro,
    dataAlteracao,
    situacao } = request.body;

    const createCliente = new CreateClienteService();

    const cliente = await createCliente.execute({
      nome,
      idTipoCliente,
      idEmpresa,
      nomeFantasia,
      tipoPessoa,
      docIdentificacao,
      rGInscricaoEst,
      fornecedor,
      sexo,
      estadoCivil,
      profissao,
      dataNascimentoAbertura,
      sincronizadoGestor,
      dataCadastro,
      dataAlteracao,
      situacao
    });


    return response.json(cliente);
  } catch (err) {
    console.log(err);
  }
});

export default clientesRouter;
