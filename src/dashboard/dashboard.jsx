import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSumario } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSumario()
    }

    render() {
        const { credito, debito } = this.props.sumario
        const total = credito - debito
        return (
            <div> 
                <ContentHeader title='Home' small='Dashboard Versão 1.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`${credito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`${debito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`} text='Valor Consolidado' />
                    </Row> 
                </Content> 
            </div>
        )
    }
}

const mapStateToProps = state => ({sumario: state.dashboard.sumario})
const mapDispatchToProps = dispatch => bindActionCreators({getSumario}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

