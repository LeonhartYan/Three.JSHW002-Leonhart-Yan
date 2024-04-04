import * as THREE from 'three'
const texture = new THREE.TextureLoader()

export const addBoilerPlateMesh = () =>{
    const box = new THREE.BoxGeometry(0.4, 0.4, 0.4)
    const boxMaterial = new THREE.MeshPhongMaterial({color: 0xffffff})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-2, 0, 0)
    return boxMesh
}

export const addBoilerPlateMesh2 = () =>{
    const Ambient = texture.load('/ambient.jpg')
    const roughness = texture.load('/roughness.jpg')
    const box = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xff6666,
        aoMap: Ambient,
        roughnessMap: roughness,
        transmission: 1.0,
        ior: 2.33,
        metalness: 0.1, 
        roughness: 0.0, 
        thickness: 1.0,
    })
    const boxMesh = new THREE.Mesh(box, material)
    boxMesh.position.set(-2, 0, 0)
    return boxMesh
}
export function addStandardMesh(){
    const box = new THREE.BoxGeometry(0.4, 0.4, 0.4)
    const boxMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(2, 0, 0)
    return boxMesh
}

export function addStandardMesh2(){
    const Ambient = texture.load('/ambient.jpg')
    const roughness = texture.load('/roughness.jpg')
    const box = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xff6666,
        aoMap: Ambient,
        roughnessMap: roughness,
        transmission: 1.0,
        ior: 2.33,
        metalness: 0.1, 
        roughness: 0.0, 
        thickness: 1.0,
    })
    const mesh = new THREE.Mesh(box, material)
    mesh.position.set(2, 0, 0)
    return mesh
}

export function addBackground(){
    const color = texture.load('/roughness.jpg')
    const geometry = new THREE.PlaneGeometry(5, 5)
    const material = new THREE.MeshBasicMaterial({map: color,})
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0, 0, -1)
    return mesh

}

export function addGlassKnot(){
    const displace = texture.load('/displace.png')
    const Ambient = texture.load('/ambient.jpg')
    const roughness = texture.load('/roughness.jpg')
    const geometry = new THREE.TorusKnotGeometry(0.6, 0.15, 100, 100, 2, 3)
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xff6666,
        aoMap: Ambient,
        roughnessMap: roughness,
        transmission: 1.0,
        ior: 2.33,
        metalness: 0.1, 
        roughness: 0.0, 
        thickness: 1.0,
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

export function addMatcap(){
    const mat = texture.load('/matcap2.png')
    const geometry = new THREE.TorusKnotGeometry(0.6, 0.1, 1000, 1000, 2, 3)
    const material = new THREE.MeshMatcapMaterial(
        {matcap: mat}
    )
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

export function addCircle1(){
    const mat = texture.load('/matcap2.png')
    const geometry = new THREE.TorusGeometry(0.6, 0.1, 100, 100)
    const material = new THREE.MeshMatcapMaterial(
        {matcap: mat}
    )
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}
export function addGlassPipe(){
    const displace = texture.load('/displace.png')
    const Ambient = texture.load('/ambient.jpg')
    const roughness = texture.load('/roughness.jpg')
    const geometry = new THREE.TorusGeometry(0.6, 0.15, 100, 100)
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xff6666,
        aoMap: Ambient,
        roughnessMap: roughness,
        transmission: 1.0,
        ior: 2.33,
        metalness: 0.1, 
        roughness: 0.0, 
        thickness: 1.0,
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

export const addPlanet1 = () =>{
    const displace = texture.load('/color.jpg')
    const Ambient = texture.load('/ambient.jpg')
    const roughness = texture.load('/roughness.jpg')
    const geometry = new THREE.SphereGeometry(0.5, 36, 18)
    const material = new THREE.MeshPhysicalMaterial({
        displacementMap :displace,
        color: 0xff4d4d,
        displacementScale: 0.6,
        aoMap: Ambient,
        roughnessMap: roughness,
        transmission: 1.0,
        ior: 2.33,
        metalness: 0.1, 
        roughness: 0.0, 
        thickness: 1.0,
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

export function addPlanet2(){
    const displace = texture.load('/color.jpg')
    const Ambient = texture.load('/ambient.jpg')
    const roughness = texture.load('/roughness.jpg')
    const sphere = new THREE.SphereGeometry(0.5, 32, 16)
    const sphereMat = new THREE.MeshPhysicalMaterial({
        color: 0xff6666,
        aoMap: Ambient,
        roughnessMap: roughness,
        transmission: 1.0,
        ior: 2.33,
        metalness: 0.1, 
        roughness: 0.0, 
        thickness: 1.0,
    })
    const sphereMash = new THREE.Mesh(sphere, sphereMat)
    sphereMash.position.set(1, 1, 0)
    return sphereMash
}

export function addPlanet3(){
    const sphere = new THREE.SphereGeometry(0.5, 32, 16)
    const sphereMat = new THREE.MeshBasicMaterial({color: 0xff0000})
    const sphereMash = new THREE.Mesh(sphere, sphereMat)
    sphereMash.position.set(1, 1, 0)
    return sphereMash
}

export function addCircle2(){
    const mat = texture.load('/matcap2.png')
    const geometry = new THREE.TorusGeometry(2, 0.1, 100, 100)
    const material = new THREE.MeshMatcapMaterial(
        {matcap: mat}
    )
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}
export function addGlassPipe2(){
    const displace = texture.load('/displace.png')
    const Ambient = texture.load('/ambient.jpg')
    const roughness = texture.load('/roughness.jpg')
    const geometry = new THREE.TorusGeometry(2, 0.15, 100, 100)
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xff6666,
        aoMap: Ambient,
        roughnessMap: roughness,
        transmission: 1.0,
        ior: 2.33,
        metalness: 0.1, 
        roughness: 0.0, 
        thickness: 1.0,
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}