import React from 'react'
import { connect } from 'react-redux'
import { changeDisplay } from '../../State/head';
import './Head.css'

class Head extends React.Component {

    componentDidMount() {
        this.props.changes()
    }

    render() {
        return (
            <div className="Head">
                <div className="Head__div">
                    <div className={this.props.display}>
                        <h2 style={{ margin: '0 20px 10px 0' }} >{this.props.text}</h2>
                    </div>
                    <div className={this.props.display2}>
                        <h2 style={{ margin: '0 20px 10px 0' }}>{this.props.text}</h2>
                    </div>
                    <div className={this.props.display3}>
                        <h2 style={{ margin: '0 20px 10px 0' }} >{this.props.text}</h2>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    display: state.head.display,
    display2: state.head.display2,
    display3: state.head.display3,
    text: state.head.text,
})
const mapDispatchToProps = dispatch => ({
    changes: () => dispatch(changeDisplay())
})
export default connect(mapStateToProps, mapDispatchToProps)(Head)