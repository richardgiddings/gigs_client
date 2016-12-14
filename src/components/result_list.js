import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResults } from '../actions/index';

class ResultList extends Component {

    constructor(props) {
        super(props);
        this.props.fetchResults();   
    }

    renderResults(gigData) {

        return (
            <tr>
                <td>{gigData.act_name}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className="table-responsive">
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>Act Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.results.length > 0 ? this.props.results.map(this.renderResults) : null}
                </tbody>
            </table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchResults}, dispatch);
}

function mapStateToProps({ results }) {
    return { results };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);