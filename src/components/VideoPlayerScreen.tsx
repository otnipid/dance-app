import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Video } from "react-native-video";

type VideoPlayerScreenProps = {
  route: RouteProp<MainStackParamList, "VideoPlayer">;
  navigation: FrameNavigationProp<MainStackParamList, "VideoPlayer">;
};

export function VideoPlayerScreen({ route }: VideoPlayerScreenProps) {
  const { videoId } = route.params;

  // TODO: Fetch actual video URL from API
  const videoUrl = `https://example.com/videos/${videoId}.mp4`;

  return (
    <flexboxLayout style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
});