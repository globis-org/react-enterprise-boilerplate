import * as React from 'react';
import { connect } from 'react-redux';

import { setMembers } from '../actions/github';
import Member from '../models/Member';
import { dummyMember } from '../models/Member';
import { GithubState } from '../reducers/github';

const mapStateToProps = (state: GithubState) => ({
  members: state.members,
});

interface GlobisProps {
  members: Member[];
}

class Globis extends React.Component<GlobisProps, {}> {
  public componentWillMount() {
    setMembers([dummyMember]);
    console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@`);
    console.log(this.props.members);
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

export default connect(mapStateToProps, {})(Globis);
