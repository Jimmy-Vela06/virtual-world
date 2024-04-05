class World {
	constructor(
		graph,
		roadWidth = 80,
		roadRoundness = 20,
		buildingWidth = 150,
		buildingMinLength = 150,
		spacing = 50
	) {
		this.graph = graph;
		this.roadWidth = roadWidth;
		this.roadRoundness = roadRoundness;

		this.buildingWidth = buildingWidth;
		this.buildingMinLength = buildingMinLength;
		this.spacing = spacing;

		this.envelopes = [];
		this.roadBorders = [];

		this.buildings = [];

		this.generate();
	}

	generate() {
		this.envelopes.length = 0;

		this.graph.segments.forEach((segment) => {
			this.envelopes.push(
				new Envelope(segment, this.roadWidth, this.roadRoundness)
			);
		});

		this.roadBorders = Polygon.union(
			this.envelopes.map((envelope) => envelope.poly)
		);

		this.buildings = this.#generateBuildings();
	}

	#generateBuildings() {
		const tmpEnvelopes = [];
		for (const seg of this.graph.segments) {
			tmpEnvelopes.push(
				new Envelope(
					seg,
					this.roadWidth + this.buildingWidth + this.spacing * 2,
					this.roadRoundness
				)
			);
		}

		const guides = Polygon.union(tmpEnvelopes.map((envelope) => envelope.poly));

		for (let i = 0; i < guides.length; i++) {
			const seg = guides[i];
			if (seg.length() < this.buildingMinLength) {
				guides.splice(i, 1);
				i--;
			}
		}

		const supports = [];
		for (const segment of guides) {
			const len = segment.length() + this.spacing;
			const buildingCount = Math.floor(
				len / (this.buildingMinLength + this.spacing)
			);
			const buildingLength = len / buildingCount - this.spacing;

			const dir = segment.directionVector();

			let q1 = segment.p1;
			let q2 = add(q1, scale(dir, buildingLength));
			supports.push(new Segment(q1, q2));

			for (let i = 2; i <= buildingCount; i++) {
				q1 = add(q2, scale(dir, this.spacing));
				q2 = add(q1, scale(dir, buildingLength));
				supports.push(new Segment(q1, q2));
			}
		}

		const bases = [];
		for (const segment of supports) {
			bases.push(new Envelope(segment, this.buildingWidth).poly);
		}

		const eps = 0.001;
		for (let i = 0; i < bases.length - 1; i++) {
			for (let j = i + 1; j < bases.length; j++) {
				if (
					bases[i].intersectsPoly(bases[j]) ||
					bases[i].distanceToPoly(bases[j]) < this.spacing - eps
				) {
					bases.splice(j, 1);
					j--;
				}
			}
		}

		// return bases;

		return bases;
	}

	draw(ctx) {
		this.envelopes.forEach((envelope) =>
			envelope.draw(ctx, {fill: '#BBB', stroke: '#BBB', lineWidth: 15})
		);

		this.graph.segments.forEach((segment) =>
			segment.draw(ctx, {color: 'white', width: 4, dash: [10, 10]})
		);

		this.roadBorders.forEach((segment) =>
			segment.draw(ctx, {color: 'white', width: 4})
		);

		this.buildings.forEach((bldg) => bldg.draw(ctx));
	}
}
