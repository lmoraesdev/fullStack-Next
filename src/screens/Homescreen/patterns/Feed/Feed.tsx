import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import React from "react";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Text>Feed Base</Text>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Base</Text>
    </Box>
  );
};
