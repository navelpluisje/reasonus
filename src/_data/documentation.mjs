/**
 * Start imports
 */
import start from "./start/start.content.mjs";
import installation from "./start/installation.content.mjs";
import settings from "./start/settings.content.mjs";

/**
 * FaderPort 8 imports
 */
import faderModes from "./fp8/fader-mode.content.mjs";
import transport from "./fp8/transport.content.mjs";
import automation from "./fp8/automation.content.mjs";
import general from "./fp8/general.content.mjs";
import mixManagement from "./fp8/mix-management.content.mjs";
import session from "./fp8/session.content.mjs";
import functions from "./fp8/functions.content.mjs";

/**
 * FaderPort V2 imports
 */
import track from "./v2/track.content.mjs";
import transport_v2 from "./v2/transport.content.mjs";
import session_v2 from "./v2/session.content.mjs";
import functions_v2 from "./v2/functions.content.mjs";

/**
 * Goodies imports
 */
import functionManagement from "./goodies/function-management.content.mjs";
import filterManagement from "./goodies/filter-management.content.mjs";
import pluginMapping from "./goodies/plugin-mapping.content.mjs";
import actions from "./goodies/actions.content.mjs";
import oldVersion from "./goodies/remove-old-version.content.mjs";

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
      transport_v2,
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
      actions,
      oldVersion,
    },
  },
];
