import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Home' icon='home' />
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='/cicloPagamentos'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)