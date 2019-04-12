import RadioOptionGroup from "./radioOptionGroup";
import React,{Component} from "react";

class RadioOption extends Component {
    render() {
        return (
            <p className="radio">
                <label>
                    <input type="radio" name="referrer" value={this.props.value}/>
                    {this.props.children}
                </label>
            </p>
        );
    }

}



export default RadioOption;