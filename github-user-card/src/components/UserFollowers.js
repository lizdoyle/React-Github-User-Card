import React from "react";

class UserFollowers extends React.Component {




    render() {
        return (
            
            <div>
                <h1>Name: {this.props.followers.name}</h1>
                <h3>Github Handle: {this.props.followers.login}</h3>
                <img src={this.props.followers.avatar_url} />
                <p>About/Bio: {this.props.followers.bio}</p>
                <h5>Repositories {this.props.followers.public_repos}</h5>
                <h5>Website: {this.props.followers.blog}</h5>
            </div>
        )
    }
}

export default UserFollowers