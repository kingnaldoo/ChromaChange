import { DodecahedronGeometry, Mesh, MeshStandardMaterial } from "three";

const geometryDodecahedron = new DodecahedronGeometry(1);
const materialDodecahedron = new MeshStandardMaterial({
  color: "green",
});
export const dodecahedron = new Mesh(geometryDodecahedron, materialDodecahedron);
