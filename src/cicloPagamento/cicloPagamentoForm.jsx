import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './cicloPagamentoActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class CicloPagamentoForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.creditos.map(c => +c.valor || 0).reduce(sum, 0),
            sumOfDebts: this.props.debitos.map(d => +d.valor || 0).reduce(sum, 0)
        }
    }

    render() {
        const { handleSubmit, readOnly, creditos, debitos } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='mes' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='ano' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <Summary credito={sumOfCredits} debito={sumOfDebts} />
                    <ItemList cols='12 6' list={creditos} readOnly={readOnly}
                        field='creditos' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debitos' legend='Débitos' showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

CicloPagamentoForm = reduxForm({form: 'cicloPagamentoForm', destroyOnUnmount: false})(CicloPagamentoForm)
const selector = formValueSelector('cicloPagamentoForm')
const mapStateToProps = state => ({
    creditos: selector(state, 'creditos'),
    debitos: selector(state, 'debitos')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoForm)