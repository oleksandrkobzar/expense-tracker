import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faBars, faReceipt } from '@fortawesome/free-solid-svg-icons'

import Transaction from './Transaction'

import './../styles/home.css'

function Home() {
  return (
    <div>
      {/* <Redirect to='/transaction' /> */}
      <header>
        <div className="container grid-xl">
          <div className="columns">
            <div className="column col-12 navbar">
              <section className="navbar-section">
                <a className="navbar-item" href="/transaction"><FontAwesomeIcon icon={faReceipt} /> Transactions</a>
                <a className="navbar-item" href="/"><FontAwesomeIcon icon={faChartBar} /> Expense Trends</a>
              </section>
              <section className="navbar-section">
                <button className="btn btn-menu"><FontAwesomeIcon icon={faBars} size="lg" /></button>
              </section>
            </div>
          </div>
        </div>
      </header>
      <div className="container grid-xl">
        <div className="columns">
          <Switch>
            <Route path='/transaction' component={Transaction} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Home