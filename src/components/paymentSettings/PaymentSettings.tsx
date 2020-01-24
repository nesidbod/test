
import * as React from 'react'
import '../../styles/paymentSettings/PaymentSettings.css'
import BillingInformations from './BillingInformationsContainer'
import InvoiceHistory from './InvoiceHistoryContainer'

interface IPaymentSettingsProps {

}

export default class PaymentSettings extends React.Component<IPaymentSettingsProps, any> {
  constructor(props: IPaymentSettingsProps) {
    super(props)

    this.state = {
    }
  }

  public componentDidMount() {
  }

  public componentWillMount() {
  }

  public render() {
    return (<React.Fragment >
      <BillingInformations />
      <InvoiceHistory />
    </React.Fragment>)
  }
}
