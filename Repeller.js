class Repeller {
    constructor(x, y) {
        this.pos = createVector(x, y); // Repeller 위치
        this.size = 30; // Repeller 크기
        this.strength = -50; // 밀어내는 힘의 크기
    }

    // 파티클에 적용할 힘 계산
    repel(particle) {
        let dir = particle.pos.copy().sub(this.pos); // Repeller에서 파티클로 향하는 방향
        let distance = constrain(dir.mag(), 5, 100); // 거리 제한
        dir.normalize();
        let force = this.strength / (distance * distance); // 거리의 제곱 반비례로 힘 계산
        dir.mult(force);
        return dir;
    }

    // Repeller 그리기
    show() {
        noStroke();
        fill(255, 0, 0, 150);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}
