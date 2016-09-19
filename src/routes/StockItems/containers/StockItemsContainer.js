import { connect } from 'react-redux'
import { addStockItem } from '../modules/stockItems'
import StockItems from 'components/StockItems'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  addStockItem
}

const mapStateToProps = (state) => ({
  stockItems: state.stock_items.stockItems,
})

export default connect(mapStateToProps, mapActionCreators)(StockItems)
