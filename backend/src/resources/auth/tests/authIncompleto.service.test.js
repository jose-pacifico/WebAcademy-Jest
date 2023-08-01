import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('Auth Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  //  implementar - 2,5
  it('should create a user', async () => {
    const res = await request(server.server)
      .post('/v1/signup')
      .send({
        nome: "José Alberto",
        email: "alberto5@test.com",
        senha: "123456"
      });

    //expect(res.status).toBe(201);
    console.log(res.body.nome)
    expect(res.body.nome).toEqual("José Alberto");


  });


  afterAll(async () => {
    await connection.close();
  });
});
