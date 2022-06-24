import Experience from '../Experience';
import Model from "./Model";

export default class Floor {
    constructor(modelName) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.model = new Model(modelName);
    }
}