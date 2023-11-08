const fetchProduct = require('../async.js');

describe('Async', () => {
  // done 을 사용하는것은 비추이다.
  // 시간이 오래걸린다.
  it('async-done', done => {
    fetchProduct().then(product => {
      expect(product).toEqual({ item: 'Milk', price: 2000 });
      done();
    });
  });

  it('async-return', () => {
    return fetchProduct().then(product => {
      expect(product).toEqual({ item: 'Milk', price: 2000 });
    });
  });

  it('async-await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 2000 });
  });

  it('async-resolves', () => {
    expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 2000 });
  });

  it('async-rejects', () => {
    expect(fetchProduct('error')).rejects.toEqual('network error');
  });
});
