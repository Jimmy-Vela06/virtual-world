class ViewPort {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.zoom = 1;

    this.#addEventListeners();
  }

  getMouse(event) {
    return new Point(event.offsetX * this.zoom, event.offsetY * this.zoom);
  }

  #addEventListeners() {
    this.canvas.addEventListener('mousewheel', this.#handleMouseWheel.bind(this));
  }
  #handleMouseWheel(event) {
    const directionZoom = Math.sign(event.deltaY);
    const step = 0.1;
    this.zoom += directionZoom * step;
    this.zoom = Math.max(1, Math.min(5, this.zoom));
    // console.log(this.zoom);
  }
}
