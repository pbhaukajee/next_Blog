import PostsGrid from "../posts/posts-grid";
import classes from "./featured-post.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
