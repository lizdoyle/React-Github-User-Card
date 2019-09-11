import React from "react";

class UserCard extends React.Component {
 constructor(props) {
        super(props);
    }



render() {
    console.log("props", this.props.user)
    return (
        <div>
            <h1>Name: {this.props.user.name}</h1>
            <h3>Github Handle: {this.props.user.login}</h3>
            <img src={this.props.user.avatar_url} />
            <p>About/Bio: {this.props.user.bio}</p>
            <h5>Repositories {this.props.user.public_repos}</h5>
            <h5>Website: {this.props.user.blog}</h5>
        </div>
    )
}
}

export default UserCard

