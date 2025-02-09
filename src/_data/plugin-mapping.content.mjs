export default {
  title: "Plugin Mapping",
  color: "gray",
  type: "tabs",
  image: "plugin-edit.webp",
  imageAlt: "",
  description:
    "There are muktiple ways of managing the mapping of plugin parameters. By far the easiest will be via MIDI Learn Multiple ways. midi learn. You can use the Ui for it, which also gives you the option to change the parameter names, number of steps etc. The last one is by changing the mapping files by hand",
  tabs: {
    "Midi Learn": {
      title: "MIDI Learn",
      content: `
      <h3>New Plugin Mapping</h3>
      <p>The idea about the <b>MIDI Learn</b> method is to make the mapping as simple as possible. When in the Plugin Channel Mode:</p>
      <ul>
        <li>Press the Solo button to open the window of that plugin.</li>
        <li>When there is no confiduration yet, a little message popsup to ask if you want to create a configuration</li>
      </ul>
      <p>Now a configuration file gets created in the background and the linking is started. All displays should now look like this </p>
      <img src="/images/plugin-learn-free.svg" style="width: 5rem;"/>
      <p>Now you can wiggle/touch a parameter in the plugin and then press the <b>Select</b> button of the channel you want to assign it to or touch the fader. This should change the text <b>Free</b> to the name of the parameter (The top one for the select button and the bottom one for the fader).</p>
      <p>The <b>Select</b>-button can be used fo toggle buttons (on/off) or plugin parameters with a limited amount of steps. in that case, when the correct data is available from the plugin, pressing the <b>Select</b>-button will loop through the options</p>
      <p>If all channels are populated (or earlier) you can use the <b>Pan/Param</b> encoder to scroll to a next set of empty slots</p>
      <p>If you want to disconnect an assignment, you can press the <b>Right Shift</b> and press the <b>Select</b> button or touch the fader you want to disconnect. The connection in removed and the text will change to <b>Free</b> again.</p>
      <h3>Edit Mapping</h3>
      <p>If the selected plugin already has a mapping, this will get activetaed instant. If you want to make changes to the mapping, press the <b>Link</b> button. This will enable the edit mode. All values should be cleared from the displays and the empty slots will get the Empty text again.</p>
      <p>If you want to overwrite a mapping, just wiggle/touch a plugin paramteter and the select the control you want to assign it to. This will overwrite it</p>
      <h3>Overwriting names</h3>
      <p>It is also possible to overwrite parameter names. Check the <b>Ui</b> tab for this.
      `,
    },
    Ui: {
      title: "Ui",
      content: `
      <p>Within ReaSonus it is also possible to manuall add a mapping or to edit some settings of the mapping. If you want to use this, you have to be in the learn mode. More about that in the <b>MIDI Learn</b> tab.</p>
      <p>In this mode, press the <b>Left Shift</b> and press the <b>Select</b> button of the channel you want to edit. The window on the left appears:</p>
      <h3>The Fields</h3>
      <ul>
        <li><b>Control Name:</b> The display name for the control. This is how the parameter appears in the display and is editable</li>
        <li><b>Original Name:</b> The name given by the developer of the plugin. This is not editable and purly for reference</li>
        <li><b>Param Id:</b> The index of the parameter. </li>
        <li><b>Number of Steps:</b> (Select only) the numbe rof steps/options for the parameter. In case of on/off this will be 2</li>
      </ul>
      <p>Changes are saved instant.</p>
      `,
    },
    Manual: {
      title: "Manual",
      content: `
        <p>The mapping of the plugins is done in simple <b>ini</b> files. These can be opened in your editor of choice. The files are located in the next location: <b>&lt;Path to reaper resources&gt;/ReaSonus/Plugins</b>. All the plugins are grouped by developer what makes searching a bit easier</p>

        <p>More info will follow</p>
      `,
    },
  },
};
