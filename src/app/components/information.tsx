import * as React from 'react'
import { Content } from '../styles/content'

interface Props {
  userName: string,
  setUserName: (name: string) => void
}

class Information extends React.Component<Props> {

  handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { setUserName } = this.props
    setUserName(e.currentTarget.value)
  }

  render() {
    const { userName } = this.props
    return <Content>
      <div>
        Name: <input value={userName} onChange={this.handleInputChange}/>
        <br/>
      {
        userName && `Your name is ${userName}`
      }
      </div>
    </Content>
  }
}

export default Information
