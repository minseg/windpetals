class Attractor {
    constructor(x, y) {
        this.pos = createVector(x, y); // Attractor 위치
        this.size = 30; // Attractor 크기
        this.strength = 50; // 끌어당기는 힘의 크기
    }

    // 파티클에 적용할 힘 계산
    attract(particle) {
        let dir = this.pos.copy().sub(particle.pos); // Attractor로 향하는 방향
        let distance = constrain(dir.mag(), 5, 100); // 거리 제한
        dir.normalize();
        let force = this.strength / (distance * distance); // 거리의 제곱 반비례로 힘 계산
        dir.mult(force);
        return dir;
    }

    // Attractor 그리기
    show() {
        noStroke();
        fill(0, 255, 0, 150);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}
