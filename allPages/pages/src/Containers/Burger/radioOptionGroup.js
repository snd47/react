import React, {Component} from "react";
import RadioOption from './radioOption';

class RadioOptionGroup extends Component {

render() {

        return (

              this.props.options.map(function (option) {

                    return (
                        <RadioOption value={option.value}
                                     key={option.value}
                                     checked={this.state.selectedOption.bind(this) === option.value}
                                     onChange={this.handleOptionChange}>
                            {option.label}
                        </RadioOption>
                    );
                })



        );

}
}
export default RadioOptionGroup;