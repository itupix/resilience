import React from 'react';

export const MyComponent = ({ status }) => (
  <section>
    <h1>My component title</h1>
    {{
      [resilienceStatus.OK]: <div>My content is ready to be displayed.</div>,
      [resilienceStatus.LOADING]: <div>My component is fetching data.</div>
      [resilienceStatus.ERROR]: <div>Seems like we have a problem.</div>
      [resilienceStatus.EMPTY]: <div>There is nothing here.</div>,
      [resilienceStatus.DENIED]: <div>You are not allowed to see this content.</div>
    }[status]}
  </section>
);
