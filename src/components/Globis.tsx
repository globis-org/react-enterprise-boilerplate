import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setMembers } from '../actions/github';
import Member from '../models/Member';
import { dummyMember } from '../models/Member';
import { State } from '../reducers';

interface GlobisProps {
  members: Member[];
  setMembers(members: Member[]): void;
}

const mapStateToProps = (state: State) => ({
  members: state.github.members,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  setMembers: (members: Member[]) => { dispatch(setMembers(members)); },
});

class Globis extends React.Component<GlobisProps, {}> {
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

export default connect(mapStateToProps, mapDispatchToProps)(Globis);
