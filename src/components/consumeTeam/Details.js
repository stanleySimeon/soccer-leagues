import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../redux/reducer/reducer';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';

const Details = () => {
  const dispatch = useDispatch();
  const { leagues } = useSelector((state) => state.leagues);

  const { leaguesId } = useParams();
  const league = leagues?.find((league) => league.id === leaguesId);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Navbar />
      <div id="details_container">
        <div className="top_leagues_img text-primary">
          <img src={league?.logo} alt="logo" style={{ width: '6rem' }} />
        </div>
        <ul className="item-list">
          {league?.teams?.map((it) => (
            <li className="item card" key={it.id}>
              <div className="item-img text-primary">
                <img className="team-img" src={it.logo} alt="logo" />
                {it.name}
              </div>
              <br />
              {it.city}
              {' '}
              {it.founded}
              {it.details}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default Details;
