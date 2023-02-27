import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

const geometry = new BoxGeometry(1, 1, 1);
const materialCube = new MeshBasicMaterial({
    color: "red",
  });
export const cube = new Mesh(geometry, materialCube);
