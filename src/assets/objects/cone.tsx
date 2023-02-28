import { ConeGeometry, Mesh, MeshStandardMaterial } from "three";

const geometryCone = new ConeGeometry(1);
const materialCone = new MeshStandardMaterial();
export const cone = new Mesh(geometryCone, materialCone);
