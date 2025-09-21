export function trilaterationLeastSquares(observers, tolerance = 1e-6) {
  const n = observers.size;
  if (n < 4) {
    return null;
  }

  const points = [];
  const distances = [];

  for (const { coordinates, distance } of observers.values()) {
    points.push(coordinates);
    distances.push(distance);
  }

  const [x0, y0, z0] = points[0];
  const d0 = distances[0];

  let A = [];
  let b = [];

  for (let i = 1; i < n; i++) {
    const [xi, yi, zi] = points[i];
    const di = distances[i];

    A.push([2 * (x0 - xi), 2 * (y0 - yi), 2 * (z0 - zi)]);
    b.push(
      di * di -
        d0 * d0 -
        (xi * xi - x0 * x0 + yi * yi - y0 * y0 + zi * zi - z0 * z0)
    );
  }

  let AtA = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let Atb = [0, 0, 0];

  for (let i = 0; i < A.length; i++) {
    const row = A[i];
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        AtA[j][k] += row[j] * row[k];
      }
      Atb[j] += row[j] * b[i];
    }
  }

  const det =
    AtA[0][0] * (AtA[1][1] * AtA[2][2] - AtA[2][1] * AtA[1][2]) -
    AtA[0][1] * (AtA[1][0] * AtA[2][2] - AtA[1][2] * AtA[2][0]) +
    AtA[0][2] * (AtA[1][0] * AtA[2][1] - AtA[1][1] * AtA[2][0]);

  if (Math.abs(det) < 1e-10) {
    return null;
  }

  const invDet = 1.0 / det;
  const invAtA = [
    [
      (AtA[1][1] * AtA[2][2] - AtA[2][1] * AtA[1][2]) * invDet,
      (AtA[0][2] * AtA[2][1] - AtA[0][1] * AtA[2][2]) * invDet,
      (AtA[0][1] * AtA[1][2] - AtA[0][2] * AtA[1][1]) * invDet,
    ],
    [
      (AtA[1][2] * AtA[2][0] - AtA[1][0] * AtA[2][2]) * invDet,
      (AtA[0][0] * AtA[2][2] - AtA[0][2] * AtA[2][0]) * invDet,
      (AtA[1][0] * AtA[0][2] - AtA[0][0] * AtA[1][2]) * invDet,
    ],
    [
      (AtA[1][0] * AtA[2][1] - AtA[2][0] * AtA[1][1]) * invDet,
      (AtA[2][0] * AtA[0][1] - AtA[0][0] * AtA[2][1]) * invDet,
      (AtA[0][0] * AtA[1][1] - AtA[1][0] * AtA[0][1]) * invDet,
    ],
  ];

  let x = invAtA[0][0] * Atb[0] + invAtA[0][1] * Atb[1] + invAtA[0][2] * Atb[2];
  let y = invAtA[1][0] * Atb[0] + invAtA[1][1] * Atb[1] + invAtA[1][2] * Atb[2];
  let z = invAtA[2][0] * Atb[0] + invAtA[2][1] * Atb[1] + invAtA[2][2] * Atb[2];

  let result = [x, y, z];

  for (let i = 0; i < n; i++) {
    const [xi, yi, zi] = points[i];
    const di = distances[i];
    const dx = xi - result[0];
    const dy = yi - result[1];
    const dz = zi - result[2];
    const calcDist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (Math.abs(calcDist - di) > tolerance) {
      return null;
    }
  }

  return result.map((v) => Math.round(v));
}
