"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var Program;module.link('@luma.gl/webgl',{Program(v){Program=v}},1);var fixture;module.link('test/setup',{fixture(v){fixture=v}},2);



const vs = `
attribute vec3 positions;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
void main(void) {
  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);
}
`;

const fs = `
void main(void) {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

test('WebGL#draw', t => {
  const {gl} = fixture;
  t.ok(gl, 'Created gl context');

  const program = new Program(gl, {vs, fs});
  t.ok(program instanceof Program, 'Program construction successful');
  t.end();
});
