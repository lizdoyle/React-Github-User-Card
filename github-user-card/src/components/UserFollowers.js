import React from "react";

class UserFollowers extends React.Component {




    render() {
        console.log("FOLLOWERS", this.props)
        return (
                    <div >
                        {this.props.followers.map(f => {
                        const {name, login, avatar_url, bio, public_repos, blog} = f   
                   return         <div>
                        <h1>Name: {name}</h1>
                        <h3>Github Handle: {login}</h3>
                        <img src={avatar_url} />
                        <p>About/Bio: {bio}</p>
                        <h5>Repositories {public_repos}</h5>
                        <h5>Website: {blog}</h5>
                            </div>
                        })}
                    </div>
                 
        )
    }
}

export default UserFollowers