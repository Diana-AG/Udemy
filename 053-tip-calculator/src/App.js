import "./styles.css";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <>
      <lable>How much was the bill?</lable>
      <input type="text" placeholder="Bill value"></input>
    </>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <lable>{children}</lable>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return <h3>You pay $X ($Y + $Z tip)</h3>;
}

function Reset() {
  return <button>Reset</button>;
}
