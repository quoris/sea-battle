import * as React from 'react';
import { connect } from "react-redux";

import { makeShoot, generateBattlefield } from './store/actions'
import { FieldState } from './store/types'
import BattleField from './components/battlefield'
import './index.css'

interface AppProps {
  makeShoot: typeof makeShoot,
  generateBattlefield: typeof generateBattlefield,
  currentFieldState: string[]
  hits: number
}

class App extends React.Component<AppProps> {
  handleShoot = (squareId: number) => {
    this.props.makeShoot(squareId)
  }

  componentWillMount() {
    this.props.generateBattlefield();
  }

  render() {
    return(
      <div className="game">
        <div className="game-board">
        <BattleField
          hits={this.props.hits}
          makeShoot={this.handleShoot}
          currentFieldState={this.props.currentFieldState}
        />
        </div>
      </div>
    );
  }
}

const mapState = (state: FieldState) => ({
  currentFieldState: state.currentFieldState,
  hits: state.hits
})

const mapDispatch = { makeShoot, generateBattlefield }

export default connect(
  mapState,
  mapDispatch
)(App);