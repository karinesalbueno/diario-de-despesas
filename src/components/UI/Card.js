import './Card.css';

function Card (props) {
    const classes = 'card ' + props.className;
    //adiciona as outras propriedades, como tb cria a classe card
    return (
        <div className={classes}>
            {props.children}
        </div>
    );

}

export default Card