import * as THREE from 'three'

export function addLight(){
    const light = new THREE.DirectionalLight
    (0xffffff, 2)
    light.position.set(0, 10, 10); 
    return light
}