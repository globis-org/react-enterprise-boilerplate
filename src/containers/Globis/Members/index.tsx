import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getOrgMembers } from 'actions/github';
import GlobisMembersComponent from 'components/Globis/Members';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => (
  bindActionCreators({ getOrgMembers }, dispatch)
);

class GlobisMembersContainer extends GlobisMembersComponent {
  public componentWillMount() {
    if (this.props.getOrgMembers) {
      this.props.getOrgMembers();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  GlobisMembersContainer as any,
);
