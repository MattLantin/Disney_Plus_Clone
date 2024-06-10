import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommended from './Recommend';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase"; 
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from "../features/user/userSlice";
import { collection, onSnapshot } from "firebase/firestore";

const Home = (props) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "movies"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;
          case "new":
            newDisneys.push({ id: doc.id, ...doc.data() });
            break;
          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            break;
          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;
          default:
            break;
        }
      });
      dispatch(setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending
      }));
    });

    return () => unsub(); // Cleanup subscription on unmount
  }, [userName]);
      
    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommended/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;