import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchMembers } from '../actions/github';
import Member from '../models/Member';
import { dummyMember } from '../models/Member';
import { State } from '../reducers';

interface StateProps {
  members: Member[];
}

interface DispatchProps {
  fetchMembers(members: Member[]): void;
}

type GlobisProps = StateProps & DispatchProps;

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  fetchMembers: () => { dispatch(fetchMembers()); },
});

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Globis extends React.Component<GlobisProps, {}> {
  public componentWillMount() {
    this.props.fetchMembers([dummyMember]);
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
