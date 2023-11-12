import React, { useState } from 'react';

const RunsListView = () => {
  const dummyRuns = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    timestamp: new Date().toLocaleString(),
    status: index % 2 === 0 ? 'pass' : 'fail', 
  }));

  const [filter, setFilter] = useState('');

  const [filteredRuns, setFilteredRuns] = useState(dummyRuns);

  const handleFilter = () => {
    const filteredData = dummyRuns.filter((run) =>
      run.timestamp.toLowerCase().includes(filter.toLowerCase()) ||
      run.status.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredRuns(filteredData);
  };

  return (
    <div>
      <h2>Runs List View</h2>
      <input
        type="text"
        placeholder="Search Runs"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>

      <div className="card-container">
        {filteredRuns.map((run) => (
          <div className="card" key={run.id}>
            <div>
              <p>Timestamp: {run.timestamp}</p>
              <p>Status: {run.status}</p>
              <button>Rerun</button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .card {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
          width: 200px;
          cursor: pointer;
        }

        .card button {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default RunsListView;
