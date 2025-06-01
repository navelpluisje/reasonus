export default {
  title: "ReaSonus Actions",
  color: "gray",
  type: "default",
  blocks: [
    {
      content: `
        <p>With <b>ReaSonus Native</b> also some actions get installed. These are internally also used in the extension, but if you want one or more of them as a menu button, you can.</p>
      `,
    },
  ],
  extra: [
    {
      title: `Reasonus: Toggle follow the play cursor`,
      description: `
        <p>Toggle Follow the play cursor. This action has a state, so should reflect its state in the button</p>

        <p>ID: <code>REASONUS_TOGGLE_PLAY_CURSOR_COMMAND</code></p>
        `,
    },
    {
      title: `Reasonus: Show the ReaSonus Filters window`,
      description: `
        <p>Toggle the ReaSonus filters window. This action has a state, so should reflect its state in the button</p>

        <p>ID: <code>REASONUS_SHOW_REASONUS_FILTERS_WINDOW</code></p>
        `,
    },
    {
      title: `Reasonus: Show the ReaSonus Functions window`,
      description: `
        <p>Toggle the ReaSonus functions window. This action has a state, so should reflect its state in the button</p>
        <p>This one is for the FaderPort 8 & 16 only</p>

        <p>ID: <code>REASONUS_SHOW_REASONUS_FUNCTION_WINDOW</code></p>
        `,
    },
    {
      title: `Reasonus: Show Reaper resource path`,
      description: `
        <p>Shows the Reaper Resource folder location in a console so you can easily copy it</p>

        <p>ID: <code>REASONUS_SHOW_REAPER_RESOURCE_PATH_COMMAND</code></p>
        `,
    },
    {
      title: `Reasonus: Close all floating fx windows`,
      description: `
        <p>Colses all the open fx windows. All other windows just stay open</p>

        <p>ID: <code>REASONUS_CLOSE_ALL_FLOATING_FX_WINDOWS_COMMAND</code></p>
        `,
    },
  ],
};
