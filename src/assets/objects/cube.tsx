import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

const geometry = new BoxGeometry(1, 1);
const materialCube = new MeshStandardMaterial({
  color: 'red',
  });
export const cube = new Mesh(geometry, materialCube);
