export default function InputTodo({onChangeInputHandler, inputTodo}){
    return(
        <input
        className="input-box"
        onChange={onChangeInputHandler}
        value={inputTodo}
        type="text"
        placeholder="Enter your todo..."
      />
    )
}