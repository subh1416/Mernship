import React, { useEffect, useState } from 'react';
import './usercard.css';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

function Usercard() {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [usersPerPage] = useState(2); // Number of users to display per page
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false); // For controlling the spinner
  const navigate = useNavigate();

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log('error');
      } else {
        setUserData(data);
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    const res = await fetch(`/deleteuser/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const deletedData = await res.json();
    console.log(deletedData);

    if (res.status === 422 || !deletedData) {
      console.log('error');
    } else {
      console.log('user deleted');
      getData();
    }
  };

  const updateUser = async (id) => {
    navigate(`/update/${id}`);
  };

  const handleNextPage = () => {
    setIsFetching(true); // Start fetching data for the next page
    setCurrentPage(currentPage + 1);
    
    setTimeout(() => {
      setIsFetching(false); // Stop the spinner after 1 second
    }, 1000);
  };

  const handlePreviousPage = () => {
    setIsFetching(true); // Start fetching data for the previous page
    setCurrentPage(currentPage - 1);
    
    setTimeout(() => {
      setIsFetching(false); // Stop the spinner after 1 second
    }, 1000);
  };

  // Calculate the index of the last user for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  // Calculate the index of the first user for the current page
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Get the array of users to display for the current page
  const usersForCurrentPage = userData.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {usersForCurrentPage.map((element, id) => (
            <div className="user-profile" key={id}>
              <div className="profile-content">
                <div className="profile-info">
                  <div className="profile-picture">
                    <img src={element.profile} alt="Profile" />
                  </div>
                  <div className="profile-header">
                    <h2>{element.username}</h2>
                    <div className="profile-actions">
                      <button className="del34" onClick={() => deleteUser(element._id)}>
                        Delete
                      </button>
                      <button className="hp908" onClick={() => updateUser(element._id)}>
                        Update
                      </button>
                    </div>
                  </div>
                </div>

                <div className="profile-details">
                  <div className="details-right">
                    <p>Name: {element.username}</p>
                    <p>Email: {element.email}</p>
                    <p>Address: {element.address}</p>
                  </div>

                  <div className="details-left">
                    <p>Mobile: {element.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <div className="container d-flex justify-content-between">
                <li className="page-item">
                  <button
                    className="page-link btn btn-dark"
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                  >
                    &larr; Previous
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link btn btn-dark"
                    disabled={currentPage === Math.ceil(userData.length / usersPerPage)}
                    onClick={handleNextPage}
                  >
                    Next &rarr;
                  </button>
                </li>
              </div>
            </ul>
          </nav>
          
          {isFetching && <Spinner />} {/* Display the spinner while fetching data */}
        </>
      )}
    </>
  );
}

export default Usercard;
