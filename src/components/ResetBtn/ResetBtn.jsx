export default function ResetBtn({ resetFunction }) {
  return (
    <div>
      <button type="button" onClick={resetFunction}>
        Reset
      </button>
    </div>
  );
}
