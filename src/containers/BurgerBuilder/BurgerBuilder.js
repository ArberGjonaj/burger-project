import React from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from "../../components/Burger/Burger"
class BurgerBuilder extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }
    state = {
        ingredients: {
            'bread-top':1,
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
            'bread-bottom':1,
        }
    }
    render(){
        return(
        <Aux>
            <Burger ingredients={this.state.ingredients} />
            <div>Build Controls</div>
        </Aux>
        )
    }
}
export default BurgerBuilder;