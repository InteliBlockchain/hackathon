import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Mesh() {
    const gltf = useLoader(GLTFLoader, '/cube_black.glb')
    const myMesh = React.useRef<any>(null)

    useFrame(({ clock }) => {
        myMesh.current.rotation.y = clock.getElapsedTime() / 2
    })

    return (
        <Suspense fallback={<div>loading...</div> /* or null */}>
            <primitive ref={myMesh} object={gltf.scene} position={[0, 0, 0]} />
        </Suspense>
    )
}

export const Cube: React.FC = () => {
    return (
            <div style={{ height: '100%', width: "100%" }}>
            <Canvas camera={{ position: [0, 16, 32] }}>
                <OrbitControls enableZoom={false} />
                <pointLight color={'#76adff'} position={[0, 0, 0]} intensity={100} />
                {/* <pointLight position={[-10, 0, 20]} intensity={1} />
                <pointLight position={[10, 0, 20]} intensity={1} />
                <pointLight position={[-10, 0, -20]} intensity={1} />
                <pointLight position={[10, 0, -20]} intensity={1} /> */}
                <Mesh />
            </Canvas>
        </div>
    )
}

