class Polygon {
  constructor(points) {
    this.points = points;
  }

  draw(ctx, { stroke = 'blue', lineWidth = 3, fill = 'rgba(0,0,255,0.2)' } = {}) {
    ctx.beginPath();

    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = lineWidth;

    ctx.moveTo(this.points[0].x, this.points[0].y);
    this.points.forEach((point) => {
      ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}
