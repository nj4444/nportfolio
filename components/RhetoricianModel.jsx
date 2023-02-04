import React, { Suspense,useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber";

function Scene(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/portt.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions.typing.play();

  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" >
        <group name="naresh" position={[-0.51, 0.2, -0.07]} rotation={[-Math.PI, 0.96, -Math.PI]} scale={0.93}>
          <primitive object={nodes.Hips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh name="Wolf3D_Body001" geometry={nodes.Wolf3D_Body001.geometry} material={materials['Wolf3D_Body.002']} skeleton={nodes.Wolf3D_Body001.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses001" geometry={nodes.Wolf3D_Glasses001.geometry} material={materials['Wolf3D_Glasses.002']} skeleton={nodes.Wolf3D_Glasses001.skeleton} />
          <skinnedMesh name="Wolf3D_Hair001" geometry={nodes.Wolf3D_Hair001.geometry} material={materials['Wolf3D_Hair.002']} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom001" geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials['Wolf3D_Outfit_Bottom.002']} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear001" geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials['Wolf3D_Outfit_Footwear.002']} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top001" geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials['Wolf3D_Outfit_Top.002']} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
          <skinnedMesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials['Wolf3D_Skin.002']} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.002']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
        </group>
        <PerspectiveCamera name="Camera" makeDefault={true} far={100} near={0.1} fov={19.5} position={[10.05, 1.93, 0.71]} rotation={[-Math.PI / 2, 1.45, Math.PI / 2]} />
        <pointLight name="Point001" intensity={0.054351} decay={2} position={[-0.25, 1.14, -0.31]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="nlogo" intensity={2.344} decay={2} position={[0, 1.1, -0.66]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point002" intensity={0.054351} decay={2} position={[-0.25, 1.14, 0.79]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point003" intensity={0.027176} decay={2} color="#efffe8" position={[1.11, 0.41, -0.5]} rotation={[-Math.PI / 2, 0, 0]} />
        <group name="splant" position={[-0.35, 0.04, 0.85]} rotation={[-Math.PI, 1.12, -Math.PI]} scale={0.12}>
          <mesh name="chair_legs_lambert_nogi_0001" geometry={nodes.chair_legs_lambert_nogi_0001.geometry} material={materials.lambert_nogi} />
          <mesh name="chair_legs_lambert_nogi_0001_1" geometry={nodes.chair_legs_lambert_nogi_0001_1.geometry} material={materials.green_grass} />
          <mesh name="chair_legs_lambert_nogi_0001_2" geometry={nodes.chair_legs_lambert_nogi_0001_2.geometry} material={materials.green_stevloe} />
          <mesh name="chair_legs_lambert_nogi_0001_3" geometry={nodes.chair_legs_lambert_nogi_0001_3.geometry} material={materials.lambert_sidushka} />
          <mesh name="chair_legs_lambert_nogi_0001_4" geometry={nodes.chair_legs_lambert_nogi_0001_4.geometry} material={materials.grey_temno} />
          <mesh name="chair_legs_lambert_nogi_0001_5" geometry={nodes.chair_legs_lambert_nogi_0001_5.geometry} material={materials.grey_niz} />
          <mesh name="chair_legs_lambert_nogi_0001_6" geometry={nodes.chair_legs_lambert_nogi_0001_6.geometry} material={materials.zemlya} />
        </group>
        <group name="nchair" position={[-0.69, 0.58, -0.01]} rotation={[0.02, 0.82, -0.02]} scale={0.56}>
          <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials.lambert3} />
          <mesh name="defaultMaterial002_1" geometry={nodes.defaultMaterial002_1.geometry} material={materials['Material.005']} />
        </group>
        <mesh name="ndesk" geometry={nodes.ndesk.geometry} material={materials['Material.013']} position={[-0.92, 0.35, 0.24]} rotation={[-Math.PI, 0.58, -Math.PI]} scale={[1.41, 0.37, 1.41]} />
        <group name="nkeyboard" position={[-0.22, 0.73, -0.44]} rotation={[1.61, 0.05, -2.28]} scale={[0.26, 0.12, 0.12]}>
          <mesh name="keybase" geometry={nodes.keybase.geometry} material={materials.key} />
          <mesh name="keybase_1" geometry={nodes.keybase_1.geometry} material={materials['Material.014']} />
        </group>
        <group name="nmouse" position={[-0.32, 0.71, -0.33]} rotation={[Math.PI / 2, 0, 2.43]} scale={0.49}>
          <mesh name="nmouse_1" geometry={nodes.nmouse_1.geometry} material={materials.mouse_color} />
          <mesh name="nmouse_2" geometry={nodes.nmouse_2.geometry} material={materials.mouselogo} />
          <mesh name="nmouse_3" geometry={nodes.nmouse_3.geometry} material={materials.mousetop} />
        </group>
        <group name="nstand" position={[-0.32, 0.73, -0.4]} rotation={[Math.PI / 2, 0, 2.44]} scale={0.48}>
          <mesh name="Stand_LightBlue_0001" geometry={nodes.Stand_LightBlue_0001.geometry} material={materials['LightBlue.002']} />
          <mesh name="Stand_LightBlue_0001_1" geometry={nodes.Stand_LightBlue_0001_1.geometry} material={materials['White.002']} />
          <mesh name="Stand_LightBlue_0001_2" geometry={nodes.Stand_LightBlue_0001_2.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="nscreen" geometry={nodes.nscreen.geometry} material={materials['Material.003']} position={[-0.32, 0.73, -0.4]} rotation={[Math.PI / 2, 0, 2.44]} scale={0.48} />
      </group>
    </group>
  )
}

useGLTF.preload('/portt.glb')


export default function RhetoricianModel({ setLoading }) {
  return (
    <Canvas dpr={[1, 2]}>
      {/* <ambientLight intensity={0.3} /> */}
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={0.6}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={8}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* <directionalLight intensity={0.5} /> */}
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
                <Scene 
                  onLoad={setTimeout(() => {
                    setLoading(false);
          }, 3000)}
        />
        </Suspense>
      </group>
      
    </Canvas>
  );
}
