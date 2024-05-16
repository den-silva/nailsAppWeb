import './Body.css'
import './Appoint'
import Appoint from './Appoint'

function Body(){
    return (
        <div className='body-section'>            
            <h1 className='titulo1'>Meus Agendamentos</h1><br/>              
            <div className='containerBody'>                
                <div>
                    <Appoint/>
                </div>
            </div>           
        </div>
    )
}

export default Body