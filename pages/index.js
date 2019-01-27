import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios';

import SuperComponent from '../components/SuperComponent';


class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = {};

        try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        userData = response.data;
        } catch(err) {
            console.error(err);
        }

        return {initialData: [1,2,3,4], userData};
    }

    constructor(props) {
        super(props);

        this.state = {
            title: 'Eu sou a Página Inicial'
        }
    }
    componentDidMount() {
        console.log('ComponentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    updateTitle = () => {
        // console.log('hehehehehheh');
        this.setState({title: 'Eu sou a Página Inicial Atualizada'});
    }

    render() {
        debugger;
        const { title } = this.state;
        // const initialData =  this.props.initialData;
        const { userData, initialData } = this.props;


      return (
         <BaseLayout>
            <h1 className='frontPage'> Minha Página Index.js da Classe de Componentes </h1>
            <h2> { title } </h2>
            <h2> { userData.title } </h2>
            <button onClick={this.updateTitle}> Mudar Título </button>
        </BaseLayout>
      )
   }
}

export default Index;

{/* <Header title={'Eu sou um componente header'}>
<h1> I sou um header subtitulo</h1>
</Header> */}