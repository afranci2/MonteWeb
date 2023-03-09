import React from "react";
import ReactDOM from "react-dom";
import DeckGL from "deck.gl";
import {
  EditableGeoJsonLayer,
  DrawLineStringMode,
  DrawPolygonMode
} from "nebula.gl";
import { StaticMap } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZ2Vvcmdpb3MtdWJlciIsImEiOiJjanZidTZzczAwajMxNGVwOGZrd2E5NG90In0.gdsRu_UeU_uPi9IulBruXA";

const initialViewState = {
  longitude: -122.43,
  latitude: 37.775,
  zoom: 12
};

function GeometryEditor() {
  const [features, setFeatures] = React.useState({
    type: "FeatureCollection",
    features: []
  });
  const [mode, setMode] = React.useState(() => DrawPolygonMode);
  const [selectedFeatureIndexes] = React.useState([]);

  const layer = new EditableGeoJsonLayer({
    // id: "geojson-layer",
    data: features,
    mode,
    selectedFeatureIndexes,

    onEdit: ({ updatedData }) => {
      setFeatures(updatedData);
    }
  });

  return (
    <>
      <DeckGL
        initialViewState={initialViewState}
        controller={{
          doubleClickZoom: false
        }}
        layers={[layer]}
        getCursor={layer.getCursor.bind(layer)}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
      <div style={{ position: "absolute", top: 0, right: 0, color: "white" }}>
        <button
          onClick={() => setMode(() => DrawLineStringMode)}
          style={{ background: mode === DrawLineStringMode ? "#3090e0" : null }}
        >
          Line
        </button>
        <button
          onClick={() => setMode(() => DrawPolygonMode)}
          style={{ background: mode === DrawPolygonMode ? "#3090e0" : null }}
        >
          Polygon
        </button>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GeometryEditor />, rootElement);
