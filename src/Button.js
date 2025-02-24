export default function Button({onClick, data, children}) {
  return (
    <button className="pointer btn btn-secondary fw-bold" onClick={(e) => onClick(e, data)}>
      {children}
    </button>
  );
}
