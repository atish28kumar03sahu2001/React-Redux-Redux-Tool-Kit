import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/Cake/cakeActions'
const NewCakeContainer = (props) => {
    const [Number, setNumber] = useState(1);
  return (
    <div>
        <h1>Number Of Cakes - {props.numOfCakes}</h1>
        <input type='text' value={Number} onChange={e=>setNumber(e.target.value)} />
        <button onClick={()=>props.buyCake(Number)}>Buy {Number} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: Number => dispatch(buyCake(Number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)