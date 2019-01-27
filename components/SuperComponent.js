import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';


class SuperComponent extends React.Component {

    constructor() {
        super();

        this.someVariable = 'Apenas uma variável';
    }
    alernName(title) {
        alert(title);
    }


    render() {
      return (
          <BaseLayout>
            <h1>Minha Página Blogs</h1>
          </BaseLayout>
        
      )
   }
}

export default SuperComponent;