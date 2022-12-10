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
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    //Background color
    renderer.setClearColor("rgb(36, 36, 36)");
    renderer.setSize(width, height);
    mount.current.appendChild(renderer.domElement);

    //ADD ORBIT CONTROL
    const controls = new OrbitControls(camera, renderer.domElement);

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //Cube color
    const material = new THREE.MeshBasicMaterial({ color: "#F7AB0A" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 4;

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

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

  return <div style={{ width: "400px", height: "400px" }} ref={mount} />;
};

export default Cube;
