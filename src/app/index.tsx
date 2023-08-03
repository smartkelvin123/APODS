import { StyleSheet, FlatList } from "react-native";
import ApodListItem from "../components/ApodListItem";
// import apodsjson from "../src/data/apods.json";
import { useState } from "react";
import FullScreenImage from "../components/FullScreenImage";
import { Apod } from "../types";
import apodsJson from "../data/apods.json";

export default function App() {
  const [apods, setApods] = useState<Apod[]>(apodsJson);
  const [activePicture, setActivePicture] = useState<string>(null);

  useState(() => {});

  return (
    <>
      <FlatList
        data={apods}
        renderItem={({ item }) => (
          <ApodListItem
            apod={item}
            onImagePress={() => setActivePicture(item.url)}
          />
        )}
      />
      <FullScreenImage url={activePicture} onClose={() => setActivePicture} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
