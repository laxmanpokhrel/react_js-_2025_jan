function SayHi(props) {
  const { name,caste,isGoodHuman } = props;

  console.log('🚀 ~ SayHi ~ name:', name);
  console.log('🚀 ~ SayHi ~ isGoodHuman:', isGoodHuman);

  //   Conditional rendering
  //   if (isGoodHuman === true) {
  //     return <div>Hi! {name}. You are a good human.</div>;
  //   } else {
  //     return <div>Hi! {name}. Please be better human.</div>;
  //   }

  // Ternary operator
  // condition ? true_case : false_case

  return (
    <div>
      Hi! {name} {caste}. {isGoodHuman === true
        ? 'You are a good human'
        : 'Please be better human.'}
    </div>
  );
}

export default SayHi;
