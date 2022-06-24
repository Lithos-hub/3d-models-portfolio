import Experience from "../Experience";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default class Model {
  constructor(model) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.modelName = model;

    this.setModel();
  }

  setModel() {
    const modelName = `./models/${this.modelName}`;
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");

    const gtlfLoader = new GLTFLoader();
    gtlfLoader.setDRACOLoader(dracoLoader);

    gtlfLoader.load(
      modelName,
      (model) => {
        model = model.scene;
        model.scale.set(1, 1, 1);
        model.castShadow = true
        if (modelName.includes('floor')) {
           const floorMesh = model.children[0];
           floorMesh.receiveShadow = true;
        }
        this.scene.add(model);
      },
      () => console.log("Loaded model"),
      (e) => console.log("Error when loading model => ", e)
    );
  }
}
