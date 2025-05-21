precision highp float;

varying vec2 vUV;

void main(void) {
    float x = vUV.x - 0.5;
    float y = vUV.y - 0.5;
    float dist = sqrt(x * x + y * y);

    float alpha = smoothstep(0.5, 0.3, dist);

    gl_FragColor = vec4(vec3(1.0), alpha);
}
