import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
//import RadioOptionGroup from './radioOptionGroup';
import BurgerList from './list';
import RadioOption from './radioOption';


class Burger extends Component {

    constructor (props){
        super ();
         this.state = { order: [],
             selectedOption: 'big'
              };
        this.RadioOptionGroup = this.RadioOptionGroup.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

RadioOptionGroup() {
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
    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();

        console.log('You have selected:', this.state.selectedOption);
    }

    render() {
        let radioOptions1 = [
            { value: 'small', label: 'Small', p : 50, cal :25, opt : false },
            { value: 'big', label: 'Big', p : 35, cal :15, opt : false },
        ];
        let radioOptions2 = [
            { value: 'cheese', label: 'Cheese', p : 25, cal :25, opt : false },
            { value: 'salad', label: 'Salad', p : 15, cal :5, opt : false },
            { value: 'fries', label: 'Fries', p : 25, cal :20, opt : false },
        ];
        let radioOptions3 = [
            { value: 'seasoning', label: 'Seasoning', p : 5, cal :0, opt : true },
            { value: 'mayo', label: 'Mayo', p : 15, cal :10, opt : true }
        ];

        return (

            <div>
                <h1>Выберите</h1>
                <BurgerList />
                <div className="order">
                    <form>
                        <RadioOptionGroup options={radioOptions1} />
                    </form>
                    <form>
                        <RadioOptionGroup options={radioOptions2} />
                    </form>
                    <form>
                        <RadioOptionGroup options={radioOptions3} />
                        <p><input type="submit"/></p>
                    </form>
                </div>
            </div>

        );
    }
}


export default Burger;
