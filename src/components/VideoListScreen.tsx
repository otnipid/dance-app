import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useSelector, useDispatch } from "react-redux";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { RootState } from "../store";

type VideoListScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "VideoList">;
};

export function VideoListScreen({ navigation }: VideoListScreenProps) {
  const dispatch = useDispatch();
  const videos = useSelector((state: RootState) => state.videos.videos);

  React.useEffect(() => {
    // TODO: Implement actual API call to fetch videos
    dispatch({ type: "FETCH_VIDEOS_SUCCESS", payload: [
      { id: 1, title: "Salsa Basics" },
      { id: 2, title: "Tango Steps" },
      { id: 3, title: "Ballet Techniques" },
    ]});
  }, [dispatch]);

  const renderVideoItem = (item) => (
    <stackLayout onTap={() => navigation.navigate("VideoPlayer", { videoId: item.id })} style={styles.videoItem}>
      <label style={styles.videoTitle}>{item.title}</label>
    </stackLayout>
  );

  return (
    <flexboxLayout style={styles.container}>
      <listView
        items={videos}
        cellFactory={renderVideoItem}
        style={styles.listView}
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
  listView: {
    height: "100%",
  },
  videoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  videoTitle: {
    fontSize: 18,
  },
});