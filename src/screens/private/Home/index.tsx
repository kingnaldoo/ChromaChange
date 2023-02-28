import React, { useCallback, useEffect } from "react";
import {
  Scene,
  PerspectiveCamera,
  Light,
  AmbientLight,
  PCFSoftShadowMap,
  DirectionalLight,
} from "three";
import { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView,  } from "expo-gl";
import { ColorText, ContainerHome, ContentHome, InlineInput } from "./styles";
import { ms } from "react-native-size-matters";
import { ButtonSubmit } from "../../../components";
import { CentralizeView } from "../../../global/styles/theme";
import { cone, cube, dodecahedron } from "../../../assets/objects";
import { updateFirebaseData } from "../../../services";
import { useAuth } from "../../../context";
import { updateStorage } from "../../../utils";

export function Home() {
  const {firestore, user} = useAuth();
  const [cubeColor, setCubeColor] = React.useState("");
  const [coneColor, setConeColor] = React.useState("");
  const [dodecahedronColor, setDodecahedronColor] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onCreateContext = async (gl: ExpoWebGLRenderingContext) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      110,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    const light = new DirectionalLight();
    const renderer = new Renderer({ gl });

    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    light.position.set(0, 0, 5);
    camera.position.set(0, -3, 4);
    cone.position.set(0, -3, 0);
    dodecahedron.position.set(0, -6, 0);

    scene.add(cube);
    scene.add(cone);
    scene.add(dodecahedron);
    scene.add(light);

    function render() {
      requestAnimationFrame(render);

      cube.rotation.x += 0.01;
      cone.rotation.x += 0.01;
      dodecahedron.rotation.x += 0.01;

      cube.rotation.y += 0.01;
      cone.rotation.y += 0.01;
      dodecahedron.rotation.y += 0.01;

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    render();
  };

  const handleApplyColor = useCallback(() => {
    setLoading(true);


    if(!cube.material.color.set(cubeColor).isColor ||
    !cone.material.color.set(coneColor).isColor ||
    !dodecahedron.material.color.set(dodecahedronColor).isColor) {
      setLoading(false);
      return;
    };

    updateFirebaseData(firestore, 'users', user.userId, {
        colors: {
          cube: cubeColor,
          cone: coneColor,
          dodecahedron: dodecahedronColor
        }
      }).then(() => {
        updateStorage('user', {
          ...user,
          colors: {
            cube: cubeColor,
            cone: coneColor,
            dodecahedron: dodecahedronColor
          }
        })
      }).catch((error) => {
        console.log("Erro ao atualizar dados: ", error)
      }).finally(() => {
        setLoading(false);
      });


  }, [cubeColor, coneColor, dodecahedronColor])

  return (
    <ContainerHome>
      <ContentHome>
        <GLView
        onContextCreate={onCreateContext}
        style={{ width: 400, height: 600, backgroundColor: "black", marginBottom: ms(20) }}
      />
      <InlineInput>
        <ColorText placeholder="Cor do cubo" onChangeText={
        (value) => setCubeColor(value)
      }/>
      <ColorText placeholder="Cor do cone" onChangeText={
        (value) => setConeColor(value)
      }/>
      <ColorText placeholder="Cor do dodecaedro" onChangeText={
        (value) => setDodecahedronColor(value)
      }/>
      </InlineInput>

      <CentralizeView>
        <ButtonSubmit
        title="Aplicar"
        onPress={handleApplyColor}
        loading={loading}
      />
      </CentralizeView>

      </ContentHome>
    </ContainerHome>
  );
}
