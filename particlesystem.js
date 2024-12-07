class ParticleSystem {
    constructor(origin) {
        this.origin = origin.copy(); // 시스템의 중심
        this.particles = []; // 파티클 배열
        for (let i = 0; i < 100; i++) {
            this.addParticle(); // 초기 파티클 생성
        }
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }

    applyRepeller(repeller) {
        for (let p of this.particles) {
            let force = repeller.repel(p); // Repeller로부터 힘 계산
            p.applyForce(force);
        }
    }

    applyAttractor(attractor) {
        for (let p of this.particles) {
            let dir = attractor.copy().sub(p.pos); // Attractor로 향하는 방향
            let distance = constrain(dir.mag(), 5, 100); // 거리 제한
            dir.normalize();
            let force = 50 / (distance * distance); // 거리 제곱 반비례 힘
            dir.mult(force);
            p.applyForce(dir);
        }
    }

    run() {
        for (let p of this.particles) {
            p.update(); // 파티클 상태 업데이트
            p.show(); // 파티클 그리기
        }
    }
}
