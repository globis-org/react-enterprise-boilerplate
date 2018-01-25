import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import { bindActionCreators, Dispatch } from 'redux';

import { getOrganizationMembers } from 'actions/github';
import GlobisMembers, { GlobisMembersProps } from 'components/Globis/Members';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => (
  bindActionCreators({ getOrganizationMembers }, dispatch)
);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle<GlobisMembersProps, {}, {}>({
    componentWillMount() {
      if (this.props.getOrganizationMembers) {
        this.props.getOrganizationMembers();
      }
    },
  }),
  pure,
)(GlobisMembers);
