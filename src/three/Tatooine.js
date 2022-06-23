import Experience from './Experience/Experience';

export const createCanvas = () => {
    const canvas = document.querySelector('.tatooine__canvas');
    const experience = new Experience(canvas);
}