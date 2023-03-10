import React from "react";
import {
  Scene,
  PerspectiveCamera,
  PCFSoftShadowMap,
  DirectionalLight,
} from "three";
import { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView,  } from "expo-gl";
import { ms } from "react-native-size-matters";


import { ButtonSubmit, Header } from "../../../components";
import { updateFirebaseData } from "../../../services";
import { removeStorage, updateStorage } from "../../../utils";

import { CentralizeView } from "../../../global/styles/theme";
import { cone, cube, dodecahedron } from "../../../assets/objects";

import {
  ColorText,
  ContainerHome,
  ContentHome,
  InlineInput,
  LogoutButton,
  LogoutText
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/createStore";
import { initialState, setLogin } from "../../../redux/modules/auth/reducer";

export function Home() {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const [cubeColor, setCubeColor] = React.useState(auth.colors.cube);
  const [coneColor, setConeColor] = React.useState(auth.colors.cone);
  const [dodecahedronColor, setDodecahedronColor] = React.useState(auth.colors.dodecahedron);
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

    cube.material.color.set(cubeColor);
    cone.material.color.set(coneColor);
    dodecahedron.material.color.set(dodecahedronColor);

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

  const handleLogout = React.useCallback(async () => {
    removeStorage("user").then(() => {
      dispatch(setLogin(initialState));
    })
  }, [])

  const handleApplyColor = React.useCallback(async () => {
    setLoading(true);

    cube.material.color.set(cubeColor);
    cone.material.color.set(coneColor);
    dodecahedron.material.color.set(dodecahedronColor);

    updateFirebaseData('users', auth.userId, {
        colors: {
          cube: cubeColor,
          cone: coneColor,
          dodecahedron: dodecahedronColor
        }
      }).then(() => {
        updateStorage('user', {
          ...auth,
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
      <Header
        title="Home"
        headerRight={
          <LogoutButton
            accessibilityLabel="Bot??o para sair da aplica????o"
            accessibilityHint="Toque para sair"
            onAccessibilityTap={handleLogout}
            onPress={handleLogout}
          >
            <LogoutText>Sair</LogoutText>
          </LogoutButton>
        }
      />
      <ContentHome>
        <GLView
        onContextCreate={onCreateContext}
        style={{ width: 400, height: 600, backgroundColor: "black", marginBottom: ms(20) }}
      />
      <InlineInput>
        <ColorText
          accessibilityLabel="Campo para inserir a cor do cubo"
          placeholder="Cor do cubo"
          onChangeText={
            (value) => setCubeColor(value)
          }
        />

        <ColorText
          accessibilityLabel="Campo para inserir a cor do cone"
          placeholder="Cor do cone"
          onChangeText={
            (value) => setConeColor(value)
          }
        />

        <ColorText
          accessibilityLabel="Campo para inserir a cor do dodecaedro"
          placeholder="Cor do dodecaedro"
          onChangeText={
            (value) => setDodecahedronColor(value)
          }
        />
      </InlineInput>

      <CentralizeView>
        <ButtonSubmit
        accessibilityLabel="Bot??o para aplicar as cores"
        accessibilityHint="Toque para aplicar as cores"
        onAccessibilityTap={handleApplyColor}
        title="Aplicar"
        onPress={handleApplyColor}
        loading={loading}
      />
      </CentralizeView>

      </ContentHome>
    </ContainerHome>
  );
}
