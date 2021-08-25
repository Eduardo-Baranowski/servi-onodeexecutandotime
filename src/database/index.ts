import {
  Connection,
  createConnection as createConnectionTypeorm,
  getConnection,
} from 'typeorm';

export const createConnection = async (): Promise<Connection> => {
  const connection = await createConnectionTypeorm('default');

  return connection;
};

export const closeConnection = async (): Promise<void> => {
  await getConnection('default').close();
};
