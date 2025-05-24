const track = {
  title: "Track",
  content: `
    <ol>
      <li><b>Display:</b></li>
      <ul>
        <li><b>Line 1:</b> Track name</li>
        <li><b>Line 2:</b></li>
        <ul>
          <li><b>Default:</b> Track number</li>
          <li><b>Left Shift:</b> Track number</li>
          <li><b>Right Shift:</b> Track number</li>
          <li><b>Arm:</b> Input name</li>
        </ul>
        <li><b>Line 3: </b></li>
        <ul>
          <li><b>Default:</b> Pan value (depending on the mode it is pan or width)</li>
          <li><b>Left Shift:</b> Pan value 1</li>
          <li><b>Right Shift:</b> Pan value 1</li>
          <li><b>Arm:</b> Track monitor mode</li>
        </ul>
        <li><b>Line 4:</b></li>
        <ul>
          <li><b>Default:</b> Not Used</li>
          <li><b>Left Shift:</b> Pan value 2</li>
          <li><b>Right Shift:</b> Pan value 2</li>
          <li><b>Arm:</b> Recording mode</li>
        </ul>
      </ul>
      <li><b>Meter:</b> Shows the Vu meter only in default mode. The meter is hidden when using the shift and or arm button.</li>
      <li><b>Value bar:</b></li>
      <ul>
        <li><b>Default:</b> Displays the Tracks current pan position.</li>
        <li><b>Left Shift:</b> Track volume.</li>
      </ul>
      <li><b>Pan/Param:</b></li>
      <ul>
        <li><b>Default:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
        <li><b>Left Shift:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
      </ul>
      <li><b>Select button:</b></li>
      <ul>
        <li><b>Default:</b> Unique-select the Track. Other Tracks will be de-selected.</li>
        <li><b>Left Shift:</b> Select the Track. All previous selected Tracks will also stay selected.</li>
        <li><b>Right Shift:</b> Selects the range of Tracks between the previous selected Track and the current selected Track.</li>
        <li><b>Arm:</b> Toggle Track arm.</li>
      </ul>
      <li><b>Solo:</b></li>
      <ul>
        <li><b>Default:</b> Isolates the corresponding Tracks output signal in the mix.</li>
        <li><b>Long Press:</b> Holding the Solo button for longer then half a second makes the button momentary. This means that after releasing the button after that half a second, the value will go to the previous value after release. This can be helpfull for quickly checking a track soloed.</li>
        </ul>
        <li><b>Mute:</b></li>
        <ul>
        <li><b>Default:</b> Mutes the corresponding Tracks output signal.</li>
        <li><b>Long Press:</b> Holding the Mute button for longer then half a second makes the button momentary. This means that after releasing the button after that half a second, the value will go to the previous value after release. This can be helpfull for quickly checking with the track muted.</li>
      </ul>
      <li><b>Touch-Sensitive Fader:</b></li>
      <ul>
        <li><b>Default:</b> Control volume levels.</li>
        <li><b>Left Shift:</b> Control the pan value 1.</li>
        <li><b>Right Shift:</b> Control the pan value 2.</li>
      </ul>
    </ol>
  `,
};

const plugin = {
  title: "Plugin",
  content: `
    <ol>
      <li><b>Display:</b></li>
      <ul>
        <li><b>Line 1:</b> Track name, the colors are inverted in track mode for the selected track.</li>
        <li><b>Line 2:</b> Plugin name</li>
        <li><b>Line 3:</b> Plugin enabled</li>
        <li><b>Line 4:</b> In Hui mode this shows the current index and total number of plugins. In track mode, it is empty</li>
        </ul>
      <li><b>Meter:</b> Disabled</li>
      <li><b>Value bar:</b></li>
      <ul>
        <li><b>Default:</b> Displays the Tracks current pan position.</li>
        <li><b>Left Shift:</b> Track volume.</li>
      </ul>
      <li><b>Pan/Param:</b></li>
      <ul>
        <li><b>Default:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
        <li><b>Left Shift:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
      </ul>
      <li><b>Select button:</b></li>
      <ul>
      <li><b>Default:</b> Unique-select the Track. Other Tracks will be de-selected.</li>
      <li><b>Left Shift:</b> Select the Track. All previous selected Tracks will also stay selected.</li>
      <li><b>Right Shift:</b> Selects the range of Tracks between the previous selected Track and the current selected Track.</li>
      <li><b>Arm:</b> Toggle Track arm.</li>
      </ul>
      <li><b>Solo:</b> The Solo button is illuminated when there is a mapping available</li>
      <ul>
      <li><b>Default:</b> Toggle plugin window.</li>
      </ul>
      <li><b>Mute:</b> The mute button is illuminated when the plugin is disabled</li>
      <ul>
      <li><b>Default:</b> Toggle plugin enabled.</li>
      <li><b>Left Shift:</b> Toggle plugin offline.</li>
      </ul>
      <li><b>Touch-Sensitive Fader:</b> Control volume levels.</li>
    </ol>
  `,
};

const send = {
  title: "Send",
  content: `
    <ol>
      <li><b>Display:</b></li>
      <ul>
        <li><b>Line 1:</b> Track name, the colors are inverted in track mode for the selected track.</li>
        <li><b>Line 2:</b> Send destination name</li>
        <li><b>Line 3:</b> Send mode</li>
        <li><b>Line 4:</b> In Hui mode this shows the current index and total number of sends. In track mode, it shows the send automation mode</li>
        </ul>
      <li><b>Meter:</b> Disabled</li>
      <li><b>Value bar:</b></li>
      <ul>
        <li><b>Default:</b> Displays the Sends current pan position.</li>
        <li><b>Left Shift:</b> Send volume.</li>
      </ul>
      <li><b>Pan/Param:</b></li>
      <ul>
        <li><b>Default:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
        <li><b>Left Shift:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
      </ul>
      <li><b>Select button:</b></li>
      <ul>
        <li><b>Default:</b> Unique-select the Track. Other Tracks will be de-selected.</li>
        <li><b>Left Shift:</b> Select the Track. All previous selected Tracks will also stay selected.</li>
        <li><b>Right Shift:</b> Selects the range of Tracks between the previous selected Track and the current selected Track.</li>
        <li><b>Arm:</b> Toggle Track arm.</li>
      </ul>
      <li><b>Solo:</b></li>
      <ul>
        <li><b>Default:</b> Toggle send phase.</li>
        <li><b>Left Shift:</b> Toggle send Mono/Stereo.</li>
      </ul>
      <li><b>Mute:</b></li>
      <ul>
        <li><b>Default:</b> Toggle send mute.</li>
        <li><b>Left Shift:</b> Loop through send mode.</li>
      </ul>
      <li><b>Touch-Sensitive Fader:</b></li>
      <ul>
        <li><b>Default:</b> Control send volume level.</li>
        <li><b>Left Shift:</b> Control send pan.</li>
      </ul>
    </ol>
  `,
};

const receive = {
  title: "Receive",
  content: `
      <ol>
      <li><b>Display:</b></li>
      <ul>
        <li><b>Line 1:</b> Track name, the colors are inverted in track mode for the selected track.</li>
        <li><b>Line 2:</b> Receive source name</li>
        <li><b>Line 3:</b> Receive mode</li>
        <li><b>Line 4:</b> In Hui mode this shows the current index and total number of receives. In track mode, it shows the send automation mode</li>
        </ul>
      <li><b>Meter:</b> Disabled</li>
      <li><b>Value bar:</b></li>
      <ul>
        <li><b>Default:</b> Displays the Receives current pan position.</li>
        <li><b>Left Shift:</b> Receive volume.</li>
      </ul>
      <li><b>Pan/Param:</b></li>
      <ul>
        <li><b>Default:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
        <li><b>Left Shift:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
      </ul>
      <li><b>Select button:</b></li>
      <ul>
        <li><b>Default:</b> Unique-select the Track. Other Tracks will be de-selected.</li>
        <li><b>Left Shift:</b> Select the Track. All previous selected Tracks will also stay selected.</li>
        <li><b>Right Shift:</b> Selects the range of Tracks between the previous selected Track and the current selected Track.</li>
        <li><b>Arm:</b> Toggle Track arm.</li>
      </ul>
      <li><b>Solo:</b></li>
      <ul>
        <li><b>Default:</b> Toggle receive phase.</li>
        <li><b>Left Shift:</b> Toggle receive Mono/Stereo.</li>
      </ul>
      <li><b>Mute:</b></li>
      <ul>
        <li><b>Default:</b> Toggle receive mute.</li>
        <li><b>Left Shift:</b> Loop through receive mode.</li>
      </ul>
      <li><b>Touch-Sensitive Fader:</b></li>
      <ul>
        <li><b>Default:</b> Control receive volume level.</li>
        <li><b>Left Shift:</b> Control receive pan.</li>
      </ul>
    </ol>
  `,
};

export default {
  type: "tabs",
  title: "Fader Modes",
  color: "blue",
  description: `
    <p>The FaderPort has multiple fader modes. These modes control the functionality of the fader, mute, solo, select button and the content of the displays.</p>
    <p>By pressing the Plugin, Send and Pan (which shows the receives) when they are already active, you can switch between Hui and Track mode</p>`,
  image: "/images/controller-track.svg",
  tabs: {
    track,
    plugin,
    send,
    receive,
  },
  extra: [
    {
      type: "explanation",
      title: "HUI or Track mode",
      description: `
      <p>For the <b>Plugin</b>, <b>Send</b> and <b>Receive</b> Fader modes, when you open them first, they open in <b>HUI</b> mode. In this mode you controll all plugins, sends and receives from the respective channel. In the display you see a counter for the number of items and the current selected one. You can use the Pan encoder to scroll though the items.</p>
      <img src="/images/hui-mode.svg" />
      <p>In Track mode (press the button again to get here), all the plugins, sends and receives of the first selected track are spread over the tracks. If there are more items then the number of channels you can use the Pan encoder to scroll to the next items. The selected track is highlighted.</p>
      <img src="/images/track-mode.svg" />
      `,
    },
    {
      type: "explanation",
      title: "Pan values",
      description: `
        <p>Reaper has 3 pan modes. Depending on the choosen mode, there are 1 or 2 pan values.</p>
        <ul>
          <li><b>Stereo Balance/Mono Pan:</b> This is the default and in REAPER you'll see only one pan knob/fader. In this mode <b>Pan Value 2</b> has no function</li>
          <li><b>Stereo Pan:</b> This mode has 2 values. <b>Pan Value 1</b> is for Left/Right panning and <b>Pan Value 2</b> for the width</li>
          <li><b>Dual Pan:</b> This mode has 2 values. <b>Pan Value 1</b> is for Left panning value and <b>Pan Value 2</b> for the right panning value</li>
        </ul>
        <p>The last will show 2 knobs/faders in REAPER for panning. You can find more info about the <b>Panning Modes</b> in the REAPER documentation</p>
      `,
    },
  ],
};
