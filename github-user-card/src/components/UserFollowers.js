import React from "react";

class UserFollowers extends React.Component {




    render() {
        console.log("FOLLOWERS", this.props)
        return (
                    <div 
                    onClick={(e) => {this.props.follow(this.props.followers)} } >
                        <h1>Name: {this.props.follow.name}</h1>
                        <h3>Github Handle: {this.props.follow.login}</h3>
                        <img src={this.props.follow.avatar_url} />
                        <p>About/Bio: {this.props.follow.bio}</p>
                        <h5>Repositories {this.props.follow.public_repos}</h5>
                        <h5>Website: {this.props.follow.blog}</h5>
                    </div>
                 
        )
    }
}

export default UserFollowers