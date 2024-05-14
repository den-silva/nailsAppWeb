import './Appoint.css'

function Appoint(){
    const teste = '#1234'
    const horarioInicial = '15:00'
    const horarioFinal = '15:30'
    const procedimento = 'Esmaltação'

    return(
        <div className='containerAppoint'>
            <div className='linha'>
                <div>25/04/2023</div>
                <div>Agendamento n° {teste}</div>
            </div>            
            <div>{horarioInicial} - {horarioFinal}</div>
            <div>{procedimento}</div>
            <div className='containerBotoes'>
                {/* <button className='botaoConfirmar'>Confirmar</button> */}
                <button className='botaoCancelar'>Cancelar Agendamento</button>
            </div>       
        </div>
    )
}

export default Appoint