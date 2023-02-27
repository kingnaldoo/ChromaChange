import React from "react";
import {
  Scene,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  BoxGeometry,
  ConeGeometry,
  DodecahedronGeometry
} from "three";
import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { ContainerHome } from "./styles";
import { ms } from "react-native-size-matters";

export function Home() {


  const onContextCreate = async (gl: any) => {
    // three.js implementation.
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      110,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };

    // set camera position away from cube
    camera.position.z = 4;
    camera.position.y = -3;

    const renderer = new Renderer({ gl });
    // set size of buffer to be equal to drawing buffer width
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // create cube
    // define geometry
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
      color: "red",
    });

    //create cone
    const geometryCone = new ConeGeometry(1, 1);
    const materialCone = new MeshBasicMaterial({
      color: "yellow",
    });

    // create dodecagon
    const geometryDodecagon = new DodecahedronGeometry(1, 1);
    const materialDodecagon = new MeshBasicMaterial({
      color: "green",
    });

    const cube = new Mesh(geometry, material);
    const cone = new Mesh(geometryCone, materialCone);
    const dodecagon = new Mesh(geometryDodecagon, materialDodecagon);

    // add cube to scene
    scene.add(cube);
    scene.add(cone);
    scene.add(dodecagon);

    // create render function
    const render = () => {
      requestAnimationFrame(render);
      cube.position.y = 0;
      cone.position.y = -3;
      dodecagon.position.y = -6;

      // create rotate functionality
      // rotate around x axis
      cube.rotation.x += 0.01;
      cone.rotation.x += 0.01;
      dodecagon.rotation.x += 0.01;

      // rotate around y axis
      cube.rotation.y += 0.01;
      cone.rotation.y += 0.01;
      dodecagon.rotation.y += 0.01;

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    // call render
    render();
  };

  return (
    <ContainerHome>
      <GLView
        onContextCreate={onContextCreate}
        style={{ width: 400, height: 600, backgroundColor: "black" }}
      />
    </ContainerHome>
  );
}
