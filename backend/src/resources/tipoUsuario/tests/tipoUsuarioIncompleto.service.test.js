import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('tipoUsuario Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  //  implementar - 2,5

  it('Deveria verificar se existem apenas 2 tipos de usuário', async () => {
    const res = await request(server.server).get('/v1/tipo-usuario');
    expect(res.body.length).toEqual(2);
  });

  afterAll(async () => {
    await connection.close();
  });
});
