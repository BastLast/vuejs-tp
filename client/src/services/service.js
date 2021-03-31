import http from "../http-common";

class Service {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }
}

export default new Service();
