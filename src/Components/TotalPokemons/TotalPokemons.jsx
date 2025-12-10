import "./TotalPokemons.css";

export default function TotalPokemons({ team }) {

  const total = team.reduce((sum, p) => sum + p.count, 0);

  return (
    <>
      <h1>Total Pokemon Count in Your Team: {total}</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Count</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {team.map((p) => {
              return (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.count}</td>
                  <td>{p.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
