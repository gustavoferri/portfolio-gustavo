import { Button } from 'reactstrap';

const ControllMenu = (props) => {

    return (
       <div className="controll-menu">
            <h1> Escreva Sua História... </h1>
            <div className="status-box">
                Salvo
             </div>
             <Button color="success">Salvar</Button>
        </div>
    )
}

export default ControllMenu;