import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setMembers } from '../actions/github';
import Member from '../models/Member';
import { dummyMember } from '../models/Member';
import { State } from '../reducers';

interface StateProps {
  members: Member[];
}

interface DispatchProps {
  setMembers(members: Member[]): void;
}

type GlobisProps = StateProps & DispatchProps;

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  setMembers: (members: Member[]) => { dispatch(setMembers(members)); },
});

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Globis extends React.Component<GlobisProps, {}> {
  public componentWillMount() {
    this.props.setMembers([dummyMember]);
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
