import { ConeGeometry, Mesh, MeshBasicMaterial } from "three";

const geometryCone = new ConeGeometry(1, 1);
const materialCone = new MeshBasicMaterial({
      color: "yellow",
    });
export const cone = new Mesh(geometryCone, materialCone);
