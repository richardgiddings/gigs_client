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
            gigData.map(function(row, i) {
                return (
                    <tr>
                        <td>{row.act_name}</td>
                        <td>{row.gig_venue}</td>
                        <td>{row.gig_time}</td>
                        <td>{row.gig_date}</td>
                    </tr>
                );
            })
        );
    }

    render() {
        return (
            <div className="table-responsive">
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>Act Name</th>
                        <th>Gig Venue</th>
                        <th>Time</th>
                        <th>Date</th>
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