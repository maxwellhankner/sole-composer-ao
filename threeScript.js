//===================================================== canvas
var  renderer = new THREE.WebGLRenderer({canvas: document.getElementById("threeview")});

//===================================================== scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf1f1f1 );

//===================================================== camera
const  camera = new THREE.PerspectiveCamera(50, 2, .1, 1000);
camera.position.z = 8;
camera.position.y = 0;

//===================================================== lights
// var light = new THREE.DirectionalLight(0xefefff, .1);
// light.position.set(1, 1, 1).normalize();
// scene.add(light);
// var light = new THREE.DirectionalLight(0xffefef, .5);
// light.position.set(-1, -1, -1).normalize();
// scene.add(light);

var light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

//===================================================== orbit controls
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxDistance = 9;
controls.minDistance = 4;
controls.minPolarAngle = 1;
controls.maxPolarAngle = Math.PI/1.2;
controls.enablePan = false;
controls.update();

//===================================================== canvas texture
var aoimg = new Image();
aoimg.src = 'assets/images/ao_diffuse.png';
var ao = new THREE.CanvasTexture(aoimg);
ao.flipY = false;

var ctx = document.getElementById('texture').getContext('2d');
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
var diffuseimg = new Image();
diffuseimg.src = 'assets/images/white_diffuse.png';
diffuseimg.onload = function () {
  ctx.drawImage(diffuseimg, 0, 0, ctx.canvas.width, ctx.canvas.height);
}

var texture = new THREE.CanvasTexture(ctx.canvas);
texture.flipY = false;
var newMaterial = new THREE.MeshStandardMaterial({
  map: texture,
  aoMap: ao
});

//===================================================== model
var loader = new THREE.GLTFLoader();
var model;
loader.load(
  "assets/models/af1_ao.gltf", function(gltf) {
    gltf.scene.traverse( function( node ) {
      if (node.isMesh) node.material = newMaterial;
    });
    model = gltf.scene;
    model.scale.set(.35,.35,.35);
    model.position.y = -1;
    model.rotation.y = -95 * (Math.PI/180);
    scene.add(model);
  }
);

//===================================================== resize
window.addEventListener("resize", resizecanvas );

function resizecanvas() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth * 2;
  const height = canvas.clientHeight * 2;
  if (canvas.width !== width ||canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}}

//===================================================== animate
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
  resizecanvas()
  controls.update();
}

render();