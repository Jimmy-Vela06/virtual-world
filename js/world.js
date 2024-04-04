class World {
  constructor(graph, roadWidth = 100, roadRoundness = 9) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.envelopes = [];
    this.roadBorders = [];

    this.generate();
  }

  generate() {
    this.envelopes.length = 0;

    this.graph.segments.forEach((segment) => {
      this.envelopes.push(new Envelope(segment, this.roadWidth, this.roadRoundness));
    });

    this.roadBorders = Polygon.union(this.envelopes.map((envelope) => envelope.poly));
  }

  draw(ctx) {
    this.envelopes.forEach((envelope) => envelope.draw(ctx, { fill: '#BBB', stroke: '#BBB', lineWidth: 15 }));

    this.graph.segments.forEach((segment) => segment.draw(ctx, { color: 'white', width: 4, dash: [10, 10] }));

    this.roadBorders.forEach((segment) => segment.draw(ctx, { color: 'white', width: 4 }));
  }
}
