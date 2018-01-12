import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getOrgMembers } from '../actions/github';
import GlobisComponent from '../components/Globis';
import { State } from '../reducers';

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => (
  bindActionCreators({ getOrgMembers }, dispatch)
);

class GlobisContainer extends GlobisComponent {
  public componentWillMount() {
    if (this.props.getOrgMembers) {
      this.props.getOrgMembers();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  GlobisContainer as any,
);
