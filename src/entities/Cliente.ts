
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clientes')
class Cliente {
  @PrimaryGeneratedColumn('uuid', { name: 'Id' })
  id!: string;

  @Column({ name: 'Nome' })
  nome!: string;

  @Column({ name: 'IdTipoCliente' })
  idTipoCliente!: string;

  @Column({ name: 'IdEmpresa' })
  idEmpresa!: string;

  @Column({ name: 'TipoCliente' })
  tipoCliente!: string;

  @Column({ name: 'NomeFantasia' })
  nomeFantasia!: string;

  @Column({ name: 'TipoPessoa' })
  tipoPessoa!: string;

  @Column({ name: 'DocIdentificacao' })
  docIdentificacao!: string;

  @Column({ name: 'RGInscricaoEst' })
  rGInscricaoEst!: string;

  @Column({ name: 'Fornecedor' })
  fornecedor!: boolean;

  @Column({ name: 'Sexo' })
  sexo!: string;

  @Column({ name: 'EstadoCivil' })
  estadoCivil!: string;

  @Column({ name: 'Profissao' })
  profissao!: string;

  @Column({ name: 'DataNascimentoAbertura' })
  dataNascimentoAbertura!: string;

  @Column({ name: 'DataCadastro' })
  dataCadastro!: string;

  @Column({ name: 'DataAlteracao' })
  dataAlteracao!: string;

  @Column({ name: 'Situacao' })
  situacao!: boolean;

  @Column({ name: 'SincronizadoGestor' })
  sincronizadoGestor!: boolean;

  @CreateDateColumn({ name: 'Created_at' })
  created_at!: Date;

  @UpdateDateColumn({ name: 'Updated_at' })
  updated_at!: Date;
}

export default Cliente;
