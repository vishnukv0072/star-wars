function Cast({ cast }) {
  return (
    <div className="col-6">
      <img src={`https://i.pravatar.cc/48?u=${cast.name}`} alt={cast.name} />
      <p>{cast.name}</p>
    </div>
  );
}

export default Cast;
