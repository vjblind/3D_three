import {
  BoxBufferGeometry,
  Color,
  Mesh,
   GridHelper,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AudioListener,
  PositionalAudio,
  Audio,
  AudioLoader,
  AudioAnalyser,
  PositionalAudio,
} from "https://cdn.skypack.dev/three@0.132.2";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
//import { PositionalAudio } from "https://unpkg.com/browse/@types/three@0.140.0/src/audio/PositionalAudio.d.ts";
 


  import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
  //import { PositionalAudio } from "https://unpkg.com/browse/@types/three@0.140.0/src/audio/PositionalAudio.d.ts";
  

  // Set up the scene, camera, and renderer
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let material1, material2, material3;
  // Add a cube to the scene
  const geometry = new   BoxBufferGeometry();
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  // Add a grid to the scene
  const gridHelper = new GridHelper(10, 10);
  scene.add(gridHelper);

  // Add orbital controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const startButton = document.getElementById( 'startButton' );
  startButton.addEventListener( 'click', init );

  // create an AudioListener and add it to the camera
 
  function init() {
    const listener = new AudioListener();
    camera.add( listener );
// sound spheres
const sphere = new SphereGeometry( 20, 32, 16 );
const mesh1 = new Mesh( sphere, material1 );
mesh1.position.set( - 250, 30, 0 );
scene.add( mesh1 );

const sound1 = new PositionalAudio( listener );
const songElement = document.getElementById( 'song' );
sound1.setMediaElementSource( songElement );
sound1.setRefDistance( 20 );
sound1.setLoop( true );
songElement.play();
mesh1.add( sound1 );



}



  // add the sound to the cube
 
  // Position the camera and cube
  camera.position.z = 5;
  cube.position.x = 2;

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
  }
  animate();
