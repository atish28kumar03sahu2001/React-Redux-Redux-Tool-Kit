import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/IceCream/iceCreamActions'
const IceCreamContainer = (props) => {
  return (
    <div>
        <h1>Number Of IceCream - {props.numOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)