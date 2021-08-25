import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCliente1629842128531 implements MigrationInterface {
    name = 'CreateCliente1629842128531'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'clientes',
          columns: [
            {
              name: 'Id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'Nome',
              type: 'varchar',
            },
            {
              name: 'IdTipoCliente',
              type: 'varchar',
            },
            {
              name: 'IdEmpresa',
              type: 'varchar',
            },
            {
              name: 'TipoCliente',
              type: 'varchar',
            },
            {
              name: 'NomeFantasia',
              type: 'varchar',
            },
            {
              name: 'TipoPessoa',
              type: 'varchar',
            },
            {
              name: 'DocIdentificacao',
              type: 'varchar',
            },
            {
              name: 'RGInscricaoEst',
              type: 'varchar',
            },
            {
              name: 'Fornecedor',
              type: 'boolean',
            },
            {
              name: 'Sexo',
              type: 'varchar',
            },
            {
              name: 'EstadoCivil',
              type: 'varchar',
            },
            {
              name: 'Profissao',
              type: 'varchar',
            },
            {
              name: 'DataNascimentoAbertura',
              type: 'varchar',
            },
            {
              name: 'DataCadastro',
              type: 'varchar',
            },
            {
              name: 'DataAlteracao',
              type: 'varchar',
            },
            {
              name: 'Situacao',
              type: 'boolean',
            },
            {
              name: 'SincronizadoGestor',
              type: 'boolean',
              default: false
            },
            {
              name: 'Created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'Updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('clientes');
    }

}
