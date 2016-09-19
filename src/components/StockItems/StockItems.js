import React from 'react'
import classes from './StockItems.scss'

class StockItems extends React.Component {

  constructor(props) {
    super(props);
  }

  onInputChange(e){
    const value = e.target.value;
    const name = e.target.name;
    let stateObject = {};
    stateObject[name] = value;
    this.setState(stateObject);
  }

  onItemSubmit(e){
    const {name, description, price, availableDate, taxable} =  this.state;
    const newItem = {name, description, price, availableDate, taxable};
    // We could obviously run some validations here, but for the sake of simplicity we'll assume that all additions are valid.
    this.props.addStockItem(newItem);
  }

  render() {
    const {
      stockItems
    } = this.props;

    return (
      <div>
        <div className={classes.tableRow}>
          <div className={`${classes.tableColumn} ${classes.tableColumnHeader}`}>Name</div>
          <div className={`${classes.tableColumn} ${classes.tableColumnHeader}`}>Description</div>
          <div className={`${classes.tableColumn} ${classes.tableColumnHeader}`}>Price</div>
          <div className={`${classes.tableColumn} ${classes.tableColumnHeader}`}>Available Date</div>
          <div className={`${classes.tableColumn} ${classes.tableColumnHeader}`}>Taxable</div>
          <div className={`${classes.tableColumn} ${classes.tableColumnHeader}`}></div>
        </div>

        { stockItems.map((stockItem, index) => {
          return (
            <div key={index} className={classes.tableRow}>
              <div className={classes.tableColumn}>{stockItem.name}</div>
              <div className={classes.tableColumn}>{stockItem.description}</div>
              <div className={classes.tableColumn}>{stockItem.price}</div>
              <div className={classes.tableColumn}>{stockItem.availableDate}</div>
              <div className={classes.tableColumn}>{stockItem.taxable ? "Yes" : "No"}</div>
              <div className={classes.tableColumn}></div>
            </div>
          );
        })}

        <div className={classes.tableRow}>
          <div className={classes.tableColumn}><input name="name" onChange={this.onInputChange.bind(this)}/></div>
          <div className={classes.tableColumn}><input name="description" onChange={this.onInputChange.bind(this)}/></div>
          <div className={classes.tableColumn}><input name="price" onChange={this.onInputChange.bind(this)}/></div>
          <div className={classes.tableColumn}><input name="availableDate" onChange={this.onInputChange.bind(this)}/></div>
          <div className={classes.tableColumn}><input name="taxable" onChange={this.onInputChange.bind(this)}/></div>
          <div className={classes.tableColumn}><button onClick={this.onItemSubmit.bind(this)}>Add Stock Item</button></div>
        </div>

      </div>
    )
  }
}

StockItems.propTypes = {
  addStockItem: React.PropTypes.func.isRequired,
}

export default StockItems
