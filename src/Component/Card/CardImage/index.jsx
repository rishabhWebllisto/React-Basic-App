import React, { Component, Fragment } from "react";

class CardImage extends Component {
    render() {
        return(
            <Fragment>
                <img class="card_image rounded-circle img-thumbnail" src={this.props.img} alt="" />
            </Fragment>
        );
    }
}

export default CardImage;