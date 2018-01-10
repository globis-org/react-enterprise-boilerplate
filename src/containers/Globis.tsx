import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchMembers } from '../actions/github';
import GlobisComponent from '../components/Globis';
import { State } from '../reducers';

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => (
  bindActionCreators({ fetchMembers }, dispatch)
);

class GlobisContainer extends GlobisComponent {
  componentWillMount() {
    if (this.props.fetchMembers) {
      console.log(`@@@@@@@@@@@`);
      this.props.fetchMembers();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobisContainer as any);
