import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostItem } from "../../components/Postitem";

export function Post() {
  const {path} = useParams()
  console.log(path)
  return (
    <div>
   
      <main>
        <PostItem postSlug={path as string} />
      </main>
    </div>
  );
}
