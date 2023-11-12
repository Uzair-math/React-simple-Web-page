import { useState, useEffect } from 'react';

const Testsapi = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/tests');
      const data = await response.json();
      setTests(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test List View</h1>
      <input type="text" placeholder="Filter by name" />
      <ul>
        {tests.map((test) => (
          <li key={test.id}>
            <span>{test.name}</span>
            <button onClick={() => console.log(`Detailed view for ${test.name}`)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testsapi;
