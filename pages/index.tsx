import PostsService from "@src/services/posts/PostsService";
import { withTempleteConfig } from "@src/services/template/withTempleteConfig";

export { default } from "@src/screens/HomeScreen/HomeScreen";

export async function getStaticProps() {
  const posts = await PostsService().getAll();

  return {
    props: await withTempleteConfig({
      posts: [],
    }),
  };
}
