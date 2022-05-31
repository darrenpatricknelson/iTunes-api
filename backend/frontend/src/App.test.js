import { searchItunesAPI } from '../src/App.js';

// this test is to test a truth return
test('the response is okay and returns data', async () => {
  return expect(searchItunesAPI('drake', 'song')).resolves.toBeTruthy;
});
