import React, { Component} from 'react';
class Contramusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: 70,
            status: 'pause'
        }
    }
}
    Contramusic.defaultProps = {
        theme: 'dark'
    };

export default Contramusic;