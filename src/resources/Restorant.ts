import request from '../utils/request';
const uri = 'restaurants';
class Restorante {

  constructor() {
  }

  list(query) {
    return request({
      url: '/' + uri,
      method: 'get',
      params: query,
    });
  }
  get(id) {
    return request({
      url: '/' + uri + '/' + id,
      method: 'get',
    });
  }
}

export { Restorante as default };
