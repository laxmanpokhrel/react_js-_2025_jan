import { useState } from 'react';
// Auto rename tag
// component does rerender when state updates
// in case of list the mapped items maintain their identify so that they do not undergo any changes

function List() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6]);
  //   list.forEach((item) => {
  //     // Block of code
  //   });undergo

  const mappledList = list.map((number) => {
    // Block of code
    if (number % 2 === 0) {
      return `${number} from list`;
    }
  });
  console.log('🚀 ~ mappledList ~ mappledList:', mappledList);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setList((prevList) => {
            return [...prevList, 7];
          });
        }}
      >
        Click to update the list
      </button>
      <ol>
        {/* We apply loop here  */}
        {list.map((number, index) => {
          return <li key={index}>{number} list</li>;
        })}
      </ol>
    </div>
  );
}
export default List;
