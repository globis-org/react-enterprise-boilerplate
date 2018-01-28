import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import { bindActionCreators, Dispatch } from 'redux';

import { loadMembers } from 'actions/github';
import GlobisMembers, { GlobisMembersProps } from 'components/Globis/Members';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => (
  bindActionCreators({ loadMembers }, dispatch)
);

export default compose<any, any>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle<GlobisMembersProps, {}, {}>({
    componentDidMount() {
      if (this.props.loadMembers) {
        this.props.loadMembers('globis-org');
      }
    },
  }),
  pure,
)(GlobisMembers);
