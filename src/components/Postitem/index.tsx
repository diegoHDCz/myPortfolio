import styles from "./styles.module.scss";
import { useGetPostBySlugQuery } from "../../graphql/generated";

interface PostItem {
  postSlug: string;
}
export function PostItem(props: PostItem) {
  const { data } = useGetPostBySlugQuery({
    variables: {
      slug: props.postSlug,
    },
  });


  return (
    <>
      <div className={styles.Container}>
        <span
          dangerouslySetInnerHTML={{
            __html: data?.post?.content.html as string,
          }}
        ></span>

   
      </div>
    </>
  );
}
