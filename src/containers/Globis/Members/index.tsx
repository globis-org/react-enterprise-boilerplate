import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators, Dispatch } from 'redux';

import { getOrgMembers } from 'actions/github';
import GlobisMembersComponent, { GlobisProps } from 'components/Globis/Members';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => (
  bindActionCreators({ getOrgMembers }, dispatch)
);

export default compose(
  (connect as any)(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle<GlobisProps, {}, {}>({
    componentWillMount: () => {
      if (this.props.getOrgMembers) {
        this.props.getOrgMembers();
      }
    },
  }),
)(GlobisMembersComponent);
