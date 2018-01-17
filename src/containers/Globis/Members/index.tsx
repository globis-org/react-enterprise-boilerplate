import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators, Dispatch } from 'redux';

import { getOrganizationMembers } from 'actions/github';
import GlobisMembersComponent, { GlobisProps } from 'components/Globis/Members';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => (
  bindActionCreators({ getOrganizationMembers }, dispatch)
);

export default compose(
  (connect as any)(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle<GlobisProps, {}, {}>({
    componentWillMount() {
      if (this.props.getOrganizationMembers) {
        this.props.getOrganizationMembers();
      }
    },
  }),
)(GlobisMembersComponent);
