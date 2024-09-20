export default class Excusa {
  constructor(quien, accion, que, cuando) {
    this.quien = quien;
    this.accion = accion;
    this.que = que;
    this.cuando = cuando;
  }

  getExcusa() {
    return `${this.quien} ${this.accion} ${this.que} ${this.cuando}`;
  }
}
