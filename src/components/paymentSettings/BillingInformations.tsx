
import * as React from 'react'
import '../../styles/paymentSettings/BillingInformations.css'
import IAction from 'src/models/IAction'

interface IBillingInformationsProps {
  setBillingInfo(name: string, email: string, card: number, cvv: number, date: string) :IAction
  getBillingInfo(): IAction
  name: string
  email: string
  card: number
  cvv: number
  date: string

}

export default class BillingInformations extends React.Component<IBillingInformationsProps, any> {
  constructor(props: IBillingInformationsProps) {
    super(props)

    this.state = {
    }
  }

  public componentDidMount() {
    this.props.getBillingInfo()
  }

  public componentWillMount() {
  }

  public render() {
    return (<React.Fragment />)
  }
}
