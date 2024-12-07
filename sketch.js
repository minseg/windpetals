let particleSystem; // 파티클 시스템 객체
let repeller, attractor; // Repeller 및 Attractor

function setup() {
    createCanvas(windowWidth, windowHeight);

    // 파티클 시스템 및 Repeller/Attractor 초기화
    particleSystem = new ParticleSystem(createVector(width / 2, height / 2));
    repeller = new Repeller(width / 4, height / 4);
    attractor = createVector(3 * width / 4, 3 * height / 4); // Attractor는 간단히 Vector로 처리
}

function draw() {
    background(240);

    // Repeller 및 Attractor 시각화
    repeller.show();
    fill(0, 255, 0, 150);
    ellipse(attractor.x, attractor.y, 30);

    // 파티클 시스템 업데이트
    particleSystem.applyRepeller(repeller); // Repeller 적용
    particleSystem.applyAttractor(attractor); // Attractor 적용
    particleSystem.run();
}

// Repeller와 Attractor의 위치 조작
function mouseDragged() {
    if (mouseX < width / 2) {
        repeller.pos.set(mouseX, mouseY);
    } else {
        attractor.set(mouseX, mouseY);
    }
}
