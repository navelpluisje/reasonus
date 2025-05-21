import faderModes from "./fader-mode.content.mjs";
import automation from "./automation.content.mjs";
import transport from "./transport.content.mjs";
import general from "./general.content.mjs";
import mixManagement from "./mix-management.content.mjs";
import session from "./session.content.mjs";
import functions from "./functions.content.mjs";
import installation from "./installation.content.mjs";
import settings from "./settings.content.mjs";
import functionManagement from "./function-management.content.mjs";
import filterManagement from "./filter-management.content.mjs";
import pluginMapping from "./plugin-mapping.content.mjs";
import start from "./start.content.mjs";
/**
 * FaderPort V2 imports
 */
import track from "./track.content.mjs";
import session_v2 from "./session-v2.content.mjs";
import functions_v2 from "./functions-v2.content.mjs";

export default [
  {
    title: "start",
    slug: "",
    color: "red",
    blocks: {
      start,
      installation,
      settings,
    },
  },
  {
    title: "faderport8",
    slug: "faderport8",
    color: "blue",
    blocks: {
      faderModes,
      transport,
      automation,
      general,
      mixManagement,
      session,
      functions,
    },
  },
  {
    title: "faderportv2",
    slug: "faderportv2",
    color: "green",
    blocks: {
      track,
      transport,
      session_v2,
      functions_v2,
    },
  },
  {
    title: "goodies",
    slug: "goodies",
    color: "gray",
    blocks: {
      pluginMapping,
      functionManagement,
      filterManagement,
    },
  },
];
