import React from 'react';
import { OK, LOADING, ERROR, EMPTY, DENIED } from '../constants';

const App = ({ data, status, onRetryClick }) => (
  <section>
    <h1>Mon composant</h1>
    {{
      [LOADING]: <p>Chargement...</p>,
      [ERROR]: <p>Une erreur serveur est survenue. <button onClick={onRetryClick}>Réessayer</button></p>,
      [EMPTY]: <p>Aucun élément à afficher.</p>,
      [DENIED]: <p>Vous n'êtes pas autorisé.e à voir ce contenu</p>,
      [OK]: <ul>{data && data.map(item => <li key={item}>{item}</li>)}</ul>
    }[status]}
  </section>
);

export default App;