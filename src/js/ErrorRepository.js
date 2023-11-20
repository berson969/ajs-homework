export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [405, 'Method Not Allowed'],
      [408, 'Request Timeout'],
      [409, 'Conflict'],
      [418, 'I’m a teapot'],
      [500, 'Internal Server Error'],
      [501, 'Not Implemented'],
      [503, 'Service Unavailable'],
      [521, 'Web Server Is Down'],
      [522, 'Connection Timed Out'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
