export default function randomColor() {
    function randomNum() {
        return Math.floor(Math.random() * 256);
    }
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

}
