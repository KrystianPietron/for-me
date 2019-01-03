import React from 'react'
import { connect } from 'react-redux'
import { changeDisplay } from '../../State/head';

const style = {
    divStyle: {
        height: '900px',
    },
}

class Head extends React.Component {

    componentDidMount() {
        this.props.changes()
    }

    render() {
        return (
            <div
                style={style.divStyle}
            >
                <div style={this.props.display1}>
                    <h2 style={{ margin: '0 20px 10px 0' }}>{this.props.text}</h2>
                </div>
                <div style={this.props.display2}>
                    <h3 style={{ margin: ' 0 0 0 20px' }}>{this.props.text}</h3>
                </div>
                <div style={this.props.display3}>
                    <h3 style={{ margin: '0 20px 10px 0' }}>{this.props.text}</h3>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    display1: state.head.display1,
    display2: state.head.display2,
    display3: state.head.display3,
    text: state.head.text,
})
const mapDispatchToProps = dispatch => ({
    changes: () => dispatch(changeDisplay())
})
export default connect(mapStateToProps, mapDispatchToProps)(Head)