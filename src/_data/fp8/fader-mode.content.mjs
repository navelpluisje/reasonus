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
          <li><b>Arm:</b> Input name</li>
        </ul>
        <li><b>Line 3: </b></li>
        <ul>
          <li><b>Default:</b> Pan value (depending on the mode it is pan or width)</li>
          <li><b>Arm:</b> Track monitor mode</li>
        </ul>
        <li><b>Line 4:</b></li>
        <ul>
          <li><b>Default:</b> Not Used</li>
          <li><b>Arm:</b> Recording mode</li>
        </ul>
      </ul>
      <li><b>Meter:</b> Shows the Vu meter only in default mode. The meter is hidden when using the shift and or arm button.</li>
      <li><b>Value bar:</b> Displays the Tracks current pan position.</li>
      <li><b>Pan/Param:</b></li>
      <ul>
        <li><b>Default:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
        <li><b>Left Shift:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
      </ul>
      <li><b>Select button:</b> When the track is armed for recording, the button will blink</li>
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
      <li><b>Touch-Sensitive Fader Touch:</b> When enabled in the settings, using [Left Shift] + Fader Touch will reset the value</li>
      <li><b>Touch-Sensitive Fader:</b> Control volume levels.</li>
    </ol>
    <article class="explanation-macro explanation">
    <header><h4>Time Code</h4></header>
      <section>When you are in Track mode, you can toggle the time code to display in the displays by pressing the <b>Track</b>-button again. This will show the time code in the last displays, according to the length of the time code. In the settings are options to overwrite the toime code as displayed in REAPER with one of your choice.</section>
      <img src="/images/time-code.svg" />
    </article>
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
      Enable the Receives by pressing [Left Shift] + [Send]
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

const pan = {
  title: "Pan",
  content: `
    <ol>
      <li><b>Display:</b></li>
      <ul>
        <li><b>Line 1:</b> Track name</li>
        <li><b>Line 2:</b> Track number</li>
        <li><b>Line 3: </b> Pan value 1</li>
        <li><b>Line 4:</b>  Pan value 2</li>
      </ul>
      <li><b>Value bar:</b> Displays the Tracks current volume.</li>
      <li><b>Pan/Param:</b></li>
      <ul>
        <li><b>Default:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
        <li><b>Left Shift:</b> Controlls pan value 1 for the currently selected track. Push to set the pan position back to center.</li>
      </ul>
      <li><b>Select button:</b> When the track is armed for recording, the button will blink</li>
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
      <li><b>Touch-Sensitive Fader Touch:</b> When enabled in the settings, usinf <b>[Left Shift] + Fader Touch</b> will reset the value</li>
      <li><b>Touch-Sensitive Fader:</b>  Control corresponding Pan value</li>
    </ol>
    <article class="explanation-macro explanation">
    <header><h4>Time Code</h4></header>
      <section>When you are in Track mode, you can toggle the time code to display in the displays by pressing the <b>Track</b>-button again. This will show the time code in the last displays, according to the length of the time code. In the settings are options to overwrite the toime code as displayed in REAPER with one of your choice.</section>
      <img src="/images/time-code.svg" />
    </article>
  `,
};

export default {
  type: "tabs",
  title: "Fader Modes",
  color: "blue",
  description: `
    <p>The FaderPort has multiple fader modes. These modes control the functionality of the fader, mute, solo, select button and the content of the displays.</p>
    <p>By pressing the <b>Plugin</b>, <b>Send</b> and <b>[Left Shift] + Send</b> (which shows the receives) when they are already active, you can switch between Hui and Track mode.</p>
    <p>By pressing the <b>Pan</b> button when it is already active, you can switch between Pan 1 and Pan 2 value (more info on pan modes below). The displays indicates which one is active by inverting the color.</p>`,
  image: "/images/controller-track.svg",
  tabs: {
    track,
    plugin,
    send,
    receive,
    pan,
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
    {
      type: "explanation",
      title: "Shift buttons",
      description: `
        <p>The FaderPort has 2 Shift buttons, one on the left and one on the right side of the faders.
        There are functions the need one of the Shift buttons to be pressed as well.</p>
        <p>By short pressing one of the Shift buttons it will get engaged constant for most controls except the fader modes.</p>
        <p>In the settings is an option to swap the left and right shift buttons.<p/>
      `,
    },
  ],
};
