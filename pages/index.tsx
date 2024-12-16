import { withTempleteConfig } from "@src/services/template/withTempleteConfig";

export { default } from "@src/screens/HomeScreen/HomeScreen";

export async function getStaticProps() {
  return {
    props: await withTempleteConfig({}),
  };
}
