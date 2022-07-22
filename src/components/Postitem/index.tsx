import { useGetPostBySlugQuery } from "../../graphql/generated";

import styles from './styles.module.scss'

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
    <div
    className={styles.Container}
      dangerouslySetInnerHTML={{ __html: data?.post?.content.html as string}}
    >
  
    </div>
  );
}
