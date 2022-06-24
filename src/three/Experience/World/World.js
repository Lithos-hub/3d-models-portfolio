import Experience from "../Experience";
import Environment from "./Environment";
import Model from "./Model";

export default class World {
  constructor(modelName) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.Environment = new Environment();
    this.model = new Model(modelName);
  }


}
