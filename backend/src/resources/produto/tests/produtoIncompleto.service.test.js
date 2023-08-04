import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('Produto Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  /**
   * pré requisito para esse teste:
   *
   * cadastrar manualmente um produto no banco de dados via interface MySQL
   * ou via API, mas lembrar de alterar o banco de dados para apontar para bd de teste
   * */
  
  /**  implementar - 2,5
   * 
   * pré requisito para esse teste:
   * 
   * cadastrar manualmente um produto no banco de dados via interface MySQL
   * ou via API, mas lembrar de alterar o banco de dados para apontar para bd de teste
  */
  it('Teste para pegar um produto especifico pelo ID', async () => {
    const produtoID = "3b0defd0-330b-11ee-b421-d9342fc5ede4" //Pizza
    const res = await request(server.server).get(`/v1/produto/${produtoID}`);
    expect(res.body.nome).toEqual("Pizza");
    expect(res.body.preco).toEqual(87);
    expect(res.body.estoque).toEqual(1);
  });

    /** 
    no caso do meu teste e banco de dados local,
    o produto cadastrado possui essas caracteristicas abaixo:

    {
      id: '3b0defd0-330b-11ee-b421-d9342fc5ede4',
      nome: 'Pizza',
      preco: 87,
      estoque: 1,
      createdAt: '2023-08-04 21:09:42',
      updatedAt: '2023-08-04 21:09:42'
    }
    **/

  afterAll(async () => {
    await connection.close();
  });
});
