import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'stock_items',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const StockItems = require('./containers/StockItemsContainer').default
      const reducer = require('./modules/stockItems').default

      /*  Add the reducer to the store on key 'stock_items'  */
      injectReducer(store, { key: 'stock_items', reducer })

      /*  Return getComponent   */
      cb(null, StockItems)

    /* Webpack named bundle   */
    }, 'stock_items')
  }
})
