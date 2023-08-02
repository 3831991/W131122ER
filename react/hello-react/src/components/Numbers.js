export default function Numbers(props) {
    let numbers = [];

    for (let i = props.min; i <= props.max; i++) {
        numbers.push(i);
    }

    return <p>{numbers.join(', ')}</p>;
}