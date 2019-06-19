import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Router from './router'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from './store'
import Layout from './components/layout'

const store = configureStore()

ReactDOM.render(
  <ReduxProvider store={store}>
    <HashRouter>
      <Layout>
        <Router />
      </Layout>
    </HashRouter>
  </ReduxProvider>,
  document.getElementById("root")
)
