import React, { Component } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/Web_Background.png";
import ArticlePreview from "../ArticlePreview";

const BlogPageContainer = styled.main`
  background-image: url(${backgroundImage});
  width: 100vw;
  height: 100vh;

  overflow: scroll;
`;

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/christopherdalziel88967465.wordpress.com/posts"
      )
      .then((res) => {
        console.log(res.data.posts);
        this.setState({ posts: res.data.posts });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <BlogPageContainer className="blog">
        <div className="anchor" id="blog" />
        <h1 className="sectionTitle">Articles</h1>
        {this.state.posts.map((post) => (
          <ArticlePreview post={post} />
        ))}
      </BlogPageContainer>
    );
  }
}

export default BlogPage;
