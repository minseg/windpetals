class Particle {
    constructor(position) {
        this.pos = position.copy();
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);
        this.size = random(5, 10);
        this.color = color(random(200, 255), random(100, 200), random(150, 250), 150);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);

        // 화면 밖으로 나가면 재설정
        if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
            this.pos.x = random(width);
            this.pos.y = random(height);
            this.vel = createVector(random(-1, 1), random(-1, 1));
        }
    }

    show() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}
