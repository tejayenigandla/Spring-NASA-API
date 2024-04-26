import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const NasaDataComponent = () => {
  const [apodData, setApodData] = useState([]);
  const [error, setError] = useState(null);
  const [userParams, setUserParams] = useState({
    date: '',
    start_date: '',
    end_date: '',
    count: '',
    thumbs: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/apod', {
          params: userParams,
        });
        setApodData(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data');
      }
    };

    fetchData();
  }, [userParams]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserParams((prevParams) => ({
      ...prevParams,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleClear = () => {
    setUserParams({
      date: '',
      start_date: '',
      end_date: '',
      count: '',
      thumbs: true,
    });
  };

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">NASA APOD Data</h1>
      <form className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="date" className="form-label">Date:</label>
          <input
            id="date"
            className="form-control"
            type="date"
            name="date"
            value={userParams.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="start_date" className="form-label">Start Date:</label>
          <input
            id="start_date"
            className="form-control"
            type="date"
            name="start_date"
            value={userParams.start_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="end_date" className="form-label">End Date:</label>
          <input
            id="end_date"
            className="form-control"
            type="date"
            name="end_date"
            value={userParams.end_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="count" className="form-label">Count:</label>
          <input
            id="count"
            className="form-control"
            type="number"
            name="count"
            value={userParams.count}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="thumbs"
              name="thumbs"
              checked={userParams.thumbs}
              onChange={handleInputChange}
            />
            <label htmlFor="thumbs" className="form-check-label">Thumbs</label>
          </div>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {apodData.map((apod) => (
        <div key={apod.date} className="card mt-4">
          <img src={apod.url} className="card-img-top" alt={apod.title} />
          <div className="card-body">
            <h2 className="card-title">{apod.title}</h2>
            <p className="card-text">{apod.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NasaDataComponent;