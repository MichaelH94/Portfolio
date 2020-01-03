import React, { Component } from "react";
import './blog.css';


class Blog extends Component {
    render() {
        return <div className="Blog">
        <p>I like music a lot, and not just listening to it. I've got a blog where I primarily review and share music. In addition to music, this site also hosts my creative writing, as well as
        various culture and tech related opinion pieces. For now, my blog is hosted on Wordpress <a href="http://teamzxcv.com">here.</a> In the future, I might migrate it over to my own server, but this is sufficient for now. I plan
        on expanding my content a lot more in the future, so check it out if you're interested.
        <br/>
        <br/>
        I also have a RateYourMusic page <a href="https://rateyourmusic.com/~zxcv1337x">here</a>, if you'd like to read my thoughts on music, including which albums I've been listening to.</p>
        </div>
    }
}

export default Blog;