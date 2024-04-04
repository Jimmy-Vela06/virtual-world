class Polygon {
  constructor(points) {
    this.points = points;

    this.segments = [];
    for (let i = 1; i <= points.length; i++) {
      this.segments.push(new Segment(points[i - 1], points[i % points.length]));
    }
  }
  static union(polys) {
    Polygon.multiBreak(polys);
    const keptSegments = [];
    for (let i = 0; i < polys.length; i++) {
      for (const seg of polys[i].segments) {
        let keep = true;
        for (let j = 0; j < polys.length; j++) {
          if (i != j) {
            if (polys[j].containsSegment(seg)) {
              keep = false;
              break;
            }
          }
        }
        if (keep) {
          keptSegments.push(seg);
        }
      }
    }
    return keptSegments;
  }

  static multiBreak(polys) {
    for (let i = 0; i <= polys.length; i++) {
      for (let j = i + 1; j < polys.length; j++) {
        Polygon.break(polys[i], polys[j]);
      }
    }
  }

  static break(polyOne, polyTwo) {
    const segsOne = polyOne.segments;
    const segsTwo = polyTwo.segments;

    for (let i = 0; i < segsOne.length; i++) {
      for (let j = 0; j < segsTwo.length; j++) {
        const intersection = getIntersection(segsOne[i].p1, segsOne[i].p2, segsTwo[j].p1, segsTwo[j].p2);

        if (intersection && intersection.offset != 1 && intersection.offset != 0) {
          const point = new Point(intersection.x, intersection.y);

          let aux = segsOne[i].p2;
          segsOne[i].p2 = point;
          segsOne.splice(i + 1, 0, new Segment(point, aux));
          aux = segsTwo[j].p2;
          segsTwo[j].p2 = point;
          segsTwo.splice(j + 1, 0, new Segment(point, aux));
        }
      }
    }
  }

  containsSegment(seg) {
    const midpoint = average(seg.p1, seg.p2);
    return this.containsPoint(midpoint);
  }

  containsPoint(point) {
    const outerPoint = new Point(-1000, -1000);
    let intersectionCount = 0;
    for (const seg of this.segments) {
      const int = getIntersection(outerPoint, point, seg.p1, seg.p2);
      if (int) {
        intersectionCount++;
      }
    }
    return intersectionCount % 2 == 1;
  }

  drawSegments(ctx) {
    for (const segment of this.segments) {
      segment.draw(ctx, { color: getRandomColor(), width: 5 });
    }
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
