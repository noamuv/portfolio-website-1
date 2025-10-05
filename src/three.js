import * as T from 'three';
// eslint-disable-next-line import/no-unresolved
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import fragment from './shaders/fragment.glsl';
import vertex from './shaders/vertex.glsl';
//import * as gui from 'lil-gui';
//import { time } from 'three/tsl';
import colors from 'nice-color-palettes';

//Pick a random colour palette
//let index = Math.floor(Math.random() * colors.length);
let index = 26;
let palette = colors[index];

//Convert HEX code to ThreeJS colour
palette = palette.map(c => new T.Color(c));

console.log(palette);

const device = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: window.devicePixelRatio
};

export default class Three {
  constructor(canvas) {
    this.canvas = canvas;

    this.scene = new T.Scene();

    this.camera = new T.PerspectiveCamera(
      15,
      device.width / device.height,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 2);
    this.scene.add(this.camera);

    this.renderer = new T.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(device.width, device.height);
    this.renderer.setPixelRatio(Math.min(device.pixelRatio, 2));

    //this.controls = new OrbitControls(this.camera, this.canvas);

    this.clock = new T.Clock();

    this.time = 0;

    this.setLights();
    this.setGeometry();
    this.render();
    this.setResize();
    //this.settings();
  }

  setLights() {
    this.ambientLight = new T.AmbientLight(new T.Color(1, 1, 1, 1));
    this.scene.add(this.ambientLight);
  }

  setGeometry() {
    this.planeGeometry = new T.PlaneGeometry(1.5, 1.5, 300, 300);
    this.planeMaterial = new T.ShaderMaterial({
      side: T.DoubleSide,
      //wireframe: true,
      fragmentShader: fragment,
      vertexShader: vertex,
      uniforms: {
        // progress: { type: 'f', value: 0 },
        time: {value: 0},
        uColors: {value: palette},
      }
    });

    this.planeMesh = new T.Mesh(this.planeGeometry, this.planeMaterial);
    this.scene.add(this.planeMesh);
  }

  render() {
    // const elapsedTime = this.clock.getElapsedTime();

    // this.planeMesh.rotation.x = 0.2 * elapsedTime;
    // this.planeMesh.rotation.y = 0.1 * elapsedTime;
    this.time += 0.0002;
    this.planeMaterial.uniforms.time.value = this.time;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }

  setResize() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    device.width = window.innerWidth;
    device.height = window.innerHeight;

    //this.camera.aspect = device.width / device.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(device.width, device.height);
    this.renderer.setPixelRatio(Math.min(device.pixelRatio, 2));
  }

  // settings() {
  //   let that = this;
  //   this.settings = {
  //     progress: 0,
  //   };
  //   this.gui = new GUI();
  //   this.gui.add(this.settings, "progress", 0, 1, 0.01);
  // }
}
