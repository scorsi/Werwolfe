export default ({value, onChange}) => (
  <input type="text" value={value} onInput={(e) => {
    onChange(e.target.value)
  }}/>
)
