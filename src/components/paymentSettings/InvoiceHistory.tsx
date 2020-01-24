
import * as React from 'react'
import '../../styles/invoiceHistory/InvoiceHistory.css'
import IAction from 'src/models/IAction'
import IPlan from 'src/models/invoiceHistory/IPlan'

interface IInvoiceHistoryProps {
  getPaymentHistory(): IAction
  data: IPlan[]

}

export default class InvoiceHistory extends React.Component<IInvoiceHistoryProps, any> {
  constructor(props: IInvoiceHistoryProps) {
    super(props)

    this.state = {
    }
  }

  public componentDidMount() {
    this.props.getPaymentHistory()
  }

  public componentWillMount() {
  }

  public render() {
    return (<React.Fragment />)
  }
}
