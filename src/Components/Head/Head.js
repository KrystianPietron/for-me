import React from 'react'
import { connect } from 'react-redux'
import { changeDisplay } from '../../State/head';
import './Head.css'

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
                <div className={this.props.display}>
                    <h2 style={{ margin: '0 20px 10px 0' }}>{this.props.text}</h2>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    display: state.head.display,
    text: state.head.text,
})
const mapDispatchToProps = dispatch => ({
    changes: () => dispatch(changeDisplay())
})
export default connect(mapStateToProps, mapDispatchToProps)(Head)