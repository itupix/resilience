import React from 'react';
import { OK, LOADING, ERROR, EMPTY, DENIED } from './constants';

export const MyComponent = ({ status, onRetryClick }) => (
  <section>
    <h1>My component title</h1>
    {{
      [LOADING]: <div>Chargement...</div>,
      [ERROR]: <div>Une erreur serveur est survenue. <button onClick={onRetryClick}>Réessayer</button></div>,
      [EMPTY]: <div>Aucun élément à afficher.</div>,
      [DENIED]: <div>Vous n'êtes pas autorisé.e à voir ce contenu</div>,
      [OK]: <div>Contenu prêt à être affiché.</div>
    }[status]}
  </section>
);
