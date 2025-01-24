export default function ExpensiveComponent() {
  for (let i = 0; i <= 10000; i++) {
    console.log('Iterating many times');
  }

  return <p>ExpensiveComponent</p>;
}
