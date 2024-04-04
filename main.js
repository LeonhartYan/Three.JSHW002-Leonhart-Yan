import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addBoilerPlateMesh2, addStandardMesh, addStandardMesh2, addPlanet1, 
  addPlanet2, addGlassKnot, addMatcap, addPlanet3, addCircle1, addGlassPipe, addCircle2, addGlassPipe2 } from './addMeshes'
import { addLight } from './addLights'
import { addBackground } from './addMeshes'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias : true})
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 
  0.1, 
  100
)
var tick = 1
camera.position.set(0, 0, 5)
//let mesh
const meshes = {}
const controls = new OrbitControls(camera, renderer.domElement)

init()
function init() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  //const geometry = new THREE.BoxGeometry(1, 2, 1)
  //const material = new THREE.MeshBasicMaterial({color: 0xff0000})
  //const mesh = new THREE.Mesh(geometry, material)
  //mesh.position.set(0, 0, -5)
  meshes.default = addBoilerPlateMesh()
  meshes.default2 = addBoilerPlateMesh2()
  meshes.standard = addStandardMesh()
  meshes.standard2 = addStandardMesh2()
  meshes.defaultLight = addLight()
  meshes.addPlanet1 = addPlanet1()
  meshes.addPlanet2 = addPlanet3()
  meshes.ball = addPlanet2()
  meshes.addBackground = addBackground()
  meshes.addGlassKnot = addGlassKnot()
  meshes.addMatcap = addMatcap()
  meshes.addCircle1 = addCircle1()
  meshes.addGlassPipe = addGlassPipe()
  meshes.addCircle2 = addCircle2()
  meshes.addGlassPipe2 = addGlassPipe2()
  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.ball)
  scene.add(meshes.defaultLight)
  scene.add(meshes.addPlanet1)
  scene.add(meshes.addPlanet2)
  scene.add(meshes.addBackground)
  scene.add(new THREE.AmbientLight(0xff0000, 0.3))
  scene.add(meshes.addGlassKnot)
  scene.add(meshes.addMatcap)
  scene.add(meshes.default2)
  scene.add(meshes.standard2)
  scene.add(meshes.addCircle1)
  scene.add(meshes.addGlassPipe)
  scene.add(meshes.addCircle2)
  scene.add(meshes.addGlassPipe2)
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
 tick += 0.1
 meshes.default.rotation.x += 0.001
 //meshes.addGlassKnot.position.z = 1
 meshes.default.rotation.z += 0.001
 meshes.standard.rotation.x -= 0.001
 meshes.standard.rotation.z -= 0.001
 meshes.default2.rotation.x += 0.001
 meshes.default2.rotation.z += 0.001
 meshes.standard2.rotation.x -= 0.001
 meshes.standard2.rotation.z -= 0.001
 meshes.ball.rotation.x += 0.01
 meshes.ball.rotation.z -= 0.01
 meshes.addPlanet1.rotation.x += 0.01
 meshes.addPlanet1.rotation.y += 0.01
 meshes.addPlanet2.position.set(0, 0)
 meshes.addPlanet2.rotation.x -= 0.01
 meshes.addPlanet2.rotation.y -= 0.01
 meshes.ball.position.x = Math.sin(tick* 0.1)* 2
 meshes.ball.position.y = Math.cos(tick * 0.1) *2
 meshes.addGlassKnot.rotation.z -= 0.001
 meshes.addMatcap.rotation.z -= 0.001
 renderer.render(scene, camera)
 
}
