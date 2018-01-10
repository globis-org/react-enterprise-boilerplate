import * as React from 'react';
import { connect } from 'react-redux';

import Member from '../models/Member';
import { State } from '../reducers';

interface StateProps {
  members: Member[];
}

interface DispatchProps {
  fetchMembers(members: Member[]): void;
}

type GlobisProps = StateProps & DispatchProps;

const mapStateToProps = (state: State) => ({members: state.github.members});

@(connect(mapStateToProps) as any)
export default class Globis extends React.Component<GlobisProps, {}> {

  public componentWillReceiveProps (nextProps: GlobisProps) {
    if (this.props !== nextProps) {
      this.setState({members: nextProps.members});
    }
  }

  public render() {
    return (
      <div>
        <p>
          グロービスの社員を紹介します。
        </p>
        <ul>
          {this.props.members.map((member) =>
            <li key={member.id}>{member.login}</li>,
          )}
        </ul>
      </div>
    );
  }
}
