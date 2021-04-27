import * as React from 'react';
import { Dispatch } from 'react-use-elmish';
import { State, Action } from '../../domain/types';
import { db } from '../../firebase';
import './style.scss';

const Home: React.FC<{
  state: State;
  dispatch: Dispatch<Action>;
}> = props => {
  const { state, dispatch } = props;

  db.collection('recipes')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    });

  return (
    <div className="home">
      <p>State: {JSON.stringify(state)}</p>
    </div>
  );
};

export default Home;
