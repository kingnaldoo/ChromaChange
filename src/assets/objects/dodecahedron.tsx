import { DodecahedronGeometry, Mesh, MeshBasicMaterial } from "three";

const geometryDodecahedron = new DodecahedronGeometry(1, 1);
const materialDodecahedron = new MeshBasicMaterial({
  color: "green",
});
export const dodecahedron = new Mesh(geometryDodecahedron, materialDodecahedron);
