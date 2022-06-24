import Experience from './Experience/Experience';

export const createCanvas = (elementsModel, floorModel) => {
    const canvas = document.querySelector('.tatooine__canvas');
    const experience = new Experience(canvas, elementsModel, floorModel);
}