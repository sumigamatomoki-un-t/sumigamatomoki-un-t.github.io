import '@utils/common.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// canvas 取得
const canvas = document.querySelector('#webgl');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222); // 背景色

// レンダラー
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true; // 影を有効

// ライトを追加
const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(-1, 4, -3);
light.castShadow = true; // 修正
scene.add(light);

// カメラを作成（斜め右上から見下ろす位置）
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(-2, 3, -6); // 斜め右上
camera.lookAt(0, 1, 0);       // モデルの中心を注視

// OrbitControls でカメラ操作
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0); // 視点の中心をモデルに合わせる
controls.update();

// 床を作成（影を受ける）
const meshFloor = new THREE.Mesh(
  new THREE.BoxGeometry(2000, 0.1, 2000),
  new THREE.MeshStandardMaterial({ color: 0x5E8F3C })
);
meshFloor.position.y = -2;
meshFloor.receiveShadow = true;
scene.add(meshFloor);

// 影のクオリティ設定
light.shadow.radius = 20;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 50;

// GLTFLoader でモデル読み込み
const loader = new GLTFLoader();
loader.load(
  '/assets/model/coyle.glb',
  (gltf) => {
    const model = gltf.scene;

    // モデルのメッシュすべてに影設定
    model.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;      // 影を落とす
        obj.receiveShadow = false;  // モデルが床の影を受けるなら true
      }
    });

    scene.add(model);
    console.log('モデル読み込み成功', model);
  },
  (xhr) => {
    console.log(`読み込み中: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
  },
  (error) => {
    console.error('モデル読み込み失敗', error);
  }
);

// アニメーションループ
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
