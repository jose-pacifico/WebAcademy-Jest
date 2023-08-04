import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('Auth Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  /** 
   * 
   * implementar - 2,5
   * 
   * Para este teste, considera-se que ainda não há um usuário com o e-mail 'alberto@test.com' cadastrado.
   * 
   * */  
  it('Teste para criar um usuário', async () => {
    const res = await request(server.server)
      .post('/v1/signup')
      .send({
        nome: "José Alberto",
        email: "alberto@test.com",
        senha: "123456"
      });

    expect(res.status).toBe(201);
    expect(res.body.nome).toEqual("José Alberto");
    expect(res.body.email).toEqual("alberto@test.com");
  });

   /** 
   * 
   * implementar - 2,5
   * 
   * Para este teste, tentaremos criar um usuário que já existe.
   * 
   * */

  it('Teste para criar um usuário com um e-mail já cadastrado no sistema', async () => {
    const res = await request(server.server)
      .post('/v1/signup')
      .send({
        nome: "José Alberto",
        email: "alberto@test.com",
        senha: "123456"
      });

    expect(res.status).toBe(400);
    expect(res.body.msg).toEqual("Já existe usuário com o email informado.");
  });


  afterAll(async () => {
    await connection.close();
  });
});
