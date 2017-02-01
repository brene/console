import * as React from 'react'
import TabBar from './TabBar'

interface Props {
  children?: JSX.Element
  params: any
}

export default class Settings extends React.Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .topHeader {
            @inherit: .bgBlack04, .bb, .bBlack10;
            border-color: rgb(229,229,229);
          }

          .top-header-content {
            @inherit: .f38, .fw3, .pl25, .pt16, .mb38;
          }
        `}</style>
        <div className='topHeader'>
          <div className='top-header-content'>Settings</div>
          <TabBar params={this.props.params} />
        </div>
        {this.props.children}
      </div>
    )
  }
}