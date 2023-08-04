import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('tipoUsuario Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  /**
   * implementar - 2,5
   * 
   * Este teste valida se ao subir o backend, ele cria corretamente os tipos de usuários que o sistema pode ter.
   * 
  **/

  it('Deveria verificar se o backend iniciou corretamente a tabela de Tipo de Usuários', async () => {
    const res = await request(server.server).get('/v1/tipo-usuario');
    const tipoUsuario = res.body
    expect(tipoUsuario.length).toEqual(2);
    expect(tipoUsuario[0].id).toEqual("6a4cda94-fbb6-476b-be29-f4124cae9058");
    expect(tipoUsuario[0].rotulo).toEqual("cliente");
    expect(tipoUsuario[1].id).toEqual("7edd25c6-c89e-4c06-ae50-c3c32d71b8ad");
    expect(tipoUsuario[1].rotulo).toEqual("admin");
  });

  afterAll(async () => {
    await connection.close();
  });
});
