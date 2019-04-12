import React, {Component} from 'react'

import fetchArticle from '../../api/listWeather'
import './styles.css'

class Articles extends Component {

    state = {
        list : []
    };

    componentDidMount () {
        fetchArticle()
            .then((res) => {
                // console.log(res);
                this.setState({
                   list : Object.values(res).splice(2,2)//деструктуризация
                })

            })
            .then((res) => {
                // console.log(res);
                this.setState({
                    list : this.state.list[0]
                })

            })


    }



    render() {
        console.log(this.state.list);
        return (
            <div className="articles">
                {
                    this.state.list.map((item, index) => (
                        <div
                            className="itemList"
                            key={index}
                        >
                            <div  className="symb">  {item.symbol}</div>

                            <div  className="price">  <span className="priceLabel">Price: </span>{item.price}</div>
                            <span className="priceLabel">Yesterday close price: </span>{item.close_yesterday}


                            <div  className="name">  {item.name}</div>
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default Articles;