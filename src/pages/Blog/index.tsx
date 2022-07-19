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
      <BlogItem  />
   
    </>
  );
}
