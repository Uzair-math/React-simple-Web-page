
import React, { useState } from 'react';
import {Link} from "react-router-dom"

const Tests = () => {
  const dummyRuns = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    productName: `Product ${index + 1}`,
    shortDescription: `Short Description for Product ${index + 1}`,
    description: `Detailed description for Product ${index + 1}`,
    image: `image${index + 1}.jpg`, 
  }));

  const [filter, setFilter] = useState('');

  const [filteredRuns, setFilteredRuns] = useState(dummyRuns);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilter = () => {
    const filteredData = dummyRuns.filter(
      (run) =>
        run.productName.toLowerCase().includes(filter.toLowerCase()) ||
        run.shortDescription.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredRuns(filteredData);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Test List View</h2>
      <input
        type="text"
        placeholder="Search Runs"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>

      <div className="card-container">
        {filteredRuns.map((run) => (
          <div className="card" key={run.id} onClick={() => handleCardClick(run)}>
            <img src={run.image} alt={run.productName} />
            <div>
              <h3>{run.productName}</h3>
              <p>{run.shortDescription}</p>
           <Link to="/ProductView"> <button>Show Details</button></Link>  
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.productName}</h2>
          <p>{selectedProduct.description}</p>
        </div>
      )}

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

        .card img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .card button {
          margin-top: 10px;
        }

        .product-details {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Tests;
