
const output = document.getElementById("donut");

let A = 0;
let B = 0;

const width = 80;
const height = 24;

const luminance = ".,-~:;=!*#$@";

function renderDonut() {

  const buffer = Array(width * height).fill(" ");
  const zBuffer = Array(width * height).fill(0);

  for (let j = 0; j < 6.28; j += 0.07) {

    for (let i = 0; i < 6.28; i += 0.02) {

      const sinA = Math.sin(A);
      const cosA = Math.cos(A);

      const sinB = Math.sin(B);
      const cosB = Math.cos(B);

      const sini = Math.sin(i);
      const cosi = Math.cos(i);

      const sinj = Math.sin(j);
      const cosj = Math.cos(j);

      const h = cosj + 2;

      const D = 1 /
        (sini * h * sinA + sinj * cosA + 5);

      const t =
        sini * h * cosA - sinj * sinA;

      const x = Math.floor(
        width / 2 + 30 * D *
        (cosi * h * cosB - t * sinB)
      );

      const y = Math.floor(
        height / 2 + 15 * D *
        (cosi * h * sinB + t * cosB)
      );

      const o = x + width * y;

      const N = Math.floor(
        8 * (
          (sinj * sinA - sini * cosj * cosA) * cosB
          - sini * cosj * sinA
          - sinj * cosA
          - cosi * cosj * sinB
        )
      );

      if (
        y >= 0 && y < height &&
        x >= 0 && x < width &&
        D > zBuffer[o]
      ) {

        zBuffer[o] = D;

        buffer[o] =
          luminance[Math.max(0, Math.min(N, luminance.length - 1))];
      }
    }
  }

  let frame = "";

  for (let k = 0; k < buffer.length; k++) {
    frame += buffer[k];
    if ((k + 1) % width === 0) {
      frame += "\n";
    }
  }

  output.textContent = frame;

  A += 0.04;
  B += 0.02;
}

setInterval(renderDonut, 50);
