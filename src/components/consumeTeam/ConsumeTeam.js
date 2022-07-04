import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/reducer/reducer';

const ConsumeTeam = () => {
  const dispatch = useDispatch();
  const { leagues } = useSelector((state) => state.leagues);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div id="consumePage">
      {leagues?.map((leagues) => (
        <Link key={leagues.id} to={`/detail/${leagues.id}`}>
          <div className="card">
            <img className="card-img-top" src={leagues.logo} alt="logo" />
            <div className="card-body">
              <h5 className="card-title">{leagues.name}</h5>
              <p className="card-text">{leagues.country}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ConsumeTeam;
