import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias : true})
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 
  0.1, 
  100
)
camera.position.set(0, 0, 5)
//let mesh
const meshes = {}

init()
function init() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  //const geometry = new THREE.BoxGeometry(1, 2, 1)
  //const material = new THREE.MeshBasicMaterial({color: 0xff0000})
  //const mesh = new THREE.Mesh(geometry, material)
  //mesh.position.set(0, 0, -5)
  meshes.default = addBoilerPlateMesh()
  meshes.standard = addStandardMesh()
  meshes.defaultLight = addLight()
  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.defaultLight)
  
  resize()
  animate()
}
function resize() {
  window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}
function animate() {
 requestAnimationFrame(animate)
 meshes.default.rotation.x += 0.001
 meshes.default.rotation.z += 0.001
 meshes.standard.rotation.x -= 0.001
 meshes.standard.rotation.z -= 0.001
 renderer.render(scene, camera)
 
}
