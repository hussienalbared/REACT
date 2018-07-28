import React ,{ Component} from 'react'
export default class Abc extends Component{
     todo=[1,2,3]
render(){

    return(
<div>
<p>hussine  ahmed</p>

{ this.todo.map((x,i) =>

(
    <li eventKey={i}>{x}</li>
)
    )
    }
</div>
    );

}
}