export function calculateDistanceBetweenPoints(coords1, coords2) {
  const dx = coords2[0] - coords1[0];
  const dy = coords2[1] - coords1[1];
  const dz = coords2[2] - coords1[2];

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
