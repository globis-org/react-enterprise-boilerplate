import { connect } from 'react-redux';

import { fetchMembers } from '../actions/github';
import { State } from '../reducers';
import GlobisComponent from '../components/Globis';

const mapStateToProps = (state: State) => ({ members: state.github.members });

class GlobisContainer extends GlobisComponent {
  componentWillMount() {
    console.log('componentwillmount');
    console.log(this.props);
    this.props.fetchMembers();
  }
}

export default connect(mapStateToProps, { fetchMembers })(GlobisContainer as any);
