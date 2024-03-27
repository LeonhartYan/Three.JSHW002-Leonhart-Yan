import * as THREE from 'three'

export function addLight(){
    const light = new THREE.DirectionalLight
    (0x0000ff, 1)
    light.position.set(1, 1, 1)
    return light
}