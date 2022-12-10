import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Cube = () => {
  const mount = useRef(null);

  useEffect(() => {
    const width = mount.current.clientWidth;
    const height = mount.current.clientHeight;

    //ADD SCENE
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(-7, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Background color
    renderer.setClearColor("rgb(36, 36, 36)");
    renderer.setSize(width, height);
    mount.current.appendChild(renderer.domElement);

    // Create a ShaderMaterial with a gradient
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      varying vec2 vUv;

      void main() {
        float y = vUv.y;
        vec3 color = mix(bottomColor, topColor, y);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    //ADD ORBIT CONTROL
    const controls = new OrbitControls(camera, renderer.domElement);

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    //ADD SPHERES
    const sphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        // Colors for the gradient
        topColor: { value: new THREE.Color("#333333") },
        bottomColor: { value: new THREE.Color("#ffffff") },
      },
      vertexShader,
      fragmentShader,
    });
    // Sphere size
    const sphereGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(1.5, 0, 0);
    scene.add(sphere);

    const sphere2Geometry = new THREE.SphereGeometry(0.25, 32, 32);
    const sphere2 = new THREE.Mesh(sphere2Geometry, sphereMaterial);
    sphere2.position.set(-1.5, 0, 0);
    scene.add(sphere2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        // Cube colors
        topColor: { value: new THREE.Color("#ffef00") },
        bottomColor: { value: new THREE.Color("#F7AB0A") },
      },
      vertexShader,
      fragmentShader,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 4;

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      sphere.position.x = Math.cos(Date.now() * 0.001) * 2;
      sphere.position.y = Math.sin(Date.now() * 0.001) * 2;

      sphere2.rotation.x += 0.01;
      sphere2.rotation.y += 0.01;
      sphere2.position.x = Math.cos(Date.now() * 0.001 + 5) * 2;
      sphere2.position.y = Math.sin(Date.now() * 0.001 + 5) * 2;

      //UPDATE ORBIT CONTROL
      controls.update();

      //RENDER SCENE
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      mount.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div style={{ width: "500px", height: "450px" }} ref={mount} />;
};

export default Cube;
