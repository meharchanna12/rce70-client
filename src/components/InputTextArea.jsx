const InputTextArea = ({ input, setInput }) => {
  return (
    <textarea
      className="block p-3 rounded-xl w-full h-full resize-none bg-[#1c2333]"
      placeholder="Input"
      spellCheck="false"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default InputTextArea;
