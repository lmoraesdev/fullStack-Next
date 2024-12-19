import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import templatePageHOC from "@src/services/template/templatePageHOC";
import type { Post } from "@src/services/posts/PostsService";

interface HomeScreenProps {
  posts: Post[];
}

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts} />
      </Feed>
      <Footer />
    </Box>
  );
}

export default templatePageHOC(HomeScreen, {
  title: "home",
});
