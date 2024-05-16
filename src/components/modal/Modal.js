import './Modal.css'

function Modal () {
    return (

        <div className='JanelaModal'>
            <div className='ModalContainer'>
                <div className='ModalConteudo'>
                    <button className='ModalbotaoFechar'><strong>x</strong></button>
                    <h3>Cancelamento</h3>
                    <p>Tem certeza que deseja cancelar o agendamento?</p>
                    <div className='LinhaBotoes'>
                        <button className='botaoSim'>Sim</button>
                        <button className='botaoNao'>Não</button>
                    </div>                    
                </div>    
            </div>
        </div>
    )
}

export default Modal