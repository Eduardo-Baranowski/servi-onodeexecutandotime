import { getRepository } from 'typeorm';

import Cliente from '../entities/Cliente';

import AppError from '../errors/AppError';

interface Request {
  nome: string;
  idTipoCliente: string;
  idEmpresa: string;
  nomeFantasia: string;
  tipoPessoa: string;
  docIdentificacao: string;
  rGInscricaoEst: string;
  fornecedor: boolean;
  sexo: string;
  estadoCivil: string;
  profissao: string;
  dataNascimentoAbertura: string;
  dataCadastro: string;
  dataAlteracao: string;
  sincronizadoGestor: boolean;
  situacao: boolean;
}

class CreateClienteService {
  public async execute({
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
    dataCadastro,
    dataAlteracao,
    sincronizadoGestor,
    situacao }: Request): Promise<Cliente> {
    const clientesRepository = getRepository(Cliente);

    const checkClienteExists = await clientesRepository.findOne({
      where: { nome },
    });

    if (checkClienteExists) {
      throw new AppError('Name for client already used.');
    }


    const cliente = clientesRepository.create({
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
      dataCadastro,
      dataAlteracao,
      situacao
    });

    await clientesRepository.save(cliente);

    return cliente;
  }
}

export default CreateClienteService;
