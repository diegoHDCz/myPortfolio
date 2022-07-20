import { BlogItem } from "../../components/BlogItem";
import { Header } from "../../components/Header";
import { useGetPostsQuery } from "../../graphql/generated";
import styles from "./styles.module.scss";

export function Blog() {
  const { data } = useGetPostsQuery();
  console.log(data);
  return (
    <>
      <Header />
      <div className={styles.Container}>
      {data?.posts.map(post =>{
      return  <BlogItem key={post.id} title={post.title} createdAt={new Date(post.createdAt)} slug={post.slug} excerpt={post.excerpt} imageItem={post.coverImage} />
      })
         
      } 
      </div>
    </>
  );
}
