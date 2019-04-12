import React, { Component } from 'react';

class BurgerList extends Component {
    constructor(name, prc, cal, type) {
        super();
        this.name = name;
        this.prc = prc;
        this.cal = cal;
        this.type = type; //три типа (1. булка, 2. добавка, 3. приправа)
    }
    render() {
        const Small = new BurgerList("small", 20, 15, 1);
        const Big = new BurgerList("big", 50, 40, 1);
        const Cheese = new BurgerList("cheese", 10, 20, 2);
        const Salad = new BurgerList("salad", 20, 5, 2);
        const Fries = new BurgerList("fries", 15, 10, 2);
        const Seasoning = new BurgerList("seasoning", 15, 0, 3);
        const Mayo = new BurgerList("mayo", 20, 5, 3);

        const List1 = [Small, Big];
        const List2 = [Cheese, Salad, Fries];
        const List3 = [Seasoning, Mayo];

        console.log(List1)
        return (
            <div>
                <h3>Today on menu:</h3>

            </div>
        )
    }
}


export default BurgerList