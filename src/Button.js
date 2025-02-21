export default function Button({ onClick, data, children }) {
  return (
    <button className="btn btn-secondary fw-bold" onClick={() => onClick(data)}>
      {children}
    </button>
  );
}
