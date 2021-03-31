import http from "../http-common";

class Service {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  getParents(id) {
    return http.get(`/parents/${id}`);
  }

  getChilds(id) {
    return http.get(`/childs/${id}`);
  }

}

export default new Service();
