export default function selectFromArray(arr: Array<any>) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
