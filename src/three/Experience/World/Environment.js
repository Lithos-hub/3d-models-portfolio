import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setAmbLight();

        this.setSunLight("#e8bc66", { x: -50, y: 0, z: -100 });
        this.setSunLight("white", { x: -5, y: 190, z: 5 });
    }

    setAmbLight() {
        this.ambLight = new THREE.AmbientLight("#ffffff", 0.2);
        this.ambLight.castShadow = true;
        this.scene.add(this.ambLight);
    }

    setSunLight(color, { x, y, z }) {
        this.sunLight = new THREE.DirectionalLight(color, 1);
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 100;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(x, y, z)
        this.scene.add(this.sunLight);
    }
}