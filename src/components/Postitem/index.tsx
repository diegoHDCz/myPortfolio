import styles from "./styles.module.scss";
import { useGetPostBySlugQuery } from "../../graphql/generated";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostItem {
  postSlug: string;
}
export function PostItem(props: PostItem) {
  const { data } = useGetPostBySlugQuery({
    variables: {
      slug: props.postSlug,
    },
  });
  const dateFormatted = format(
    new Date(data?.post?.updatedAt),
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <>
      <div className={styles.Container}>
        <span
          dangerouslySetInnerHTML={{
            __html: data?.post?.content.html as string,
          }}
        ></span>

        <p className={styles.DateTime}>
          Atualizado em: {dateFormatted}
        </p>
      </div>
    </>
  );
}
