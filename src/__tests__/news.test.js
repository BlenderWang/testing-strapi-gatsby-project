import axios from 'axios'
import News from '../__mocks__/news';

jest.mock('axios');

test('should fetch news', () => {
  const news = [{title: 'News Title 1'}];
  const resp = {data: news};
  axios.get.mockResolvedValue(resp);

  return News.all().then(data => expect(data).toEqual(news));
});