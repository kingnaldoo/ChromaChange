import React, { useCallback, useEffect } from "react";
import {
  Scene,
  PerspectiveCamera,
} from "three";
import { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView,  } from "expo-gl";
import { ColorText, ContainerHome, ContentHome } from "./styles";
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
    const renderer = new Renderer({ gl });

    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    camera.position.z = 4;
    camera.position.y = -3;
    cube.position.y = 0;
    cone.position.y = -3;
    dodecahedron.position.y = -6;

    scene.add(cube);
    scene.add(cone);
    scene.add(dodecahedron);

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

  // const verifyColors = useCallBack(() => {
  //   if  ()
  // }, [])

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
      <ColorText placeholder="Cor do cubo" placeholderTextColor="#70707096" onChangeText={
        (value) => setCubeColor(value)
      }/>
      <ColorText placeholder="Cor do cone" placeholderTextColor="#70707096" onChangeText={
        (value) => setConeColor(value)
      }/>
      <ColorText placeholder="Cor do dodecaedro" placeholderTextColor="#70707096" onChangeText={
        (value) => setDodecahedronColor(value)
      }/>

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
