export default {
  title: "General Controlls",
  color: "blue",
  type: "image",
  image: "/images/controller-general.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
        <ol>
            <li><b>Encoder:</b> The behaviour differs per fader mode</li>
            <ul>
                <li><b>Track mode:</b> Rotating the encoder will alter the track pan </li>
                <li><b>Plugin mode:</b> When in Hui mode this will scroll through the track plugins</li>
                <li><b>Send mode:</b> When in Hui mode this will scroll through the track sends</li>
                <li><b>Receive mode:</b> When in Hui mode this will scroll through the track receives</li>

            </ul>
            <li><b>Encoder Click:</b></li>
            <ul>
                <li><b>Default:</b> Toggle between pan values (left/right, pan/width, etc), depending on the track pan mode</li>
                <li><b>Left Shift:</b> Reset the pan and with to default values</li>

            </ul>
            <li><b>Arm:</b> </li>
            <ul>
                <li><b>Default:</b> Behaves as a modifier key. Pressing this button will enable you to set ther record arm with the track Select buttons. A short press of this button will maintain the pressed state</li>
                <li><b>Left Shift:</b> Arm all tracks for recording</li>
                <li><b>Right Shift:</b> Unarm all tracks for recording</li>

            </ul>
            <li><b>Solo Clear:</b> Unsolo all the tracks soloed tracks</li>
            <li><b>Mute Clear:</b> Unmute all the muted tracks</li>
            <li><b>ByPass:</b></li>
            <ul>
                <li><b>Default:</b> Bypass all plugins for the selected tracks</li>
                <li><b>Left Shift:</b> Bypass all plugins for all the tracks</li>

            </ul>
            <li><b>Macro:</b></li>
            <ul>
                <li><b>Default:</b> Toggle the window for managing the filters.</li>
                <li><b>Left Shift:</b> Toggle the window filters dialog for managing the actions attached to the function keys.</li>

            </ul>
            <li><b>Link:</b></li>
            <ul>
                <li><b>Default:</b> </li>
                <ul>
                    <li>When not controlling a plugin, it will make the last fader controll the last touched parameter. This can be usefull for creating quick envelopes for that parameter. The display will show info about the plugin, parameter and value. The group of actual track faders will be 7 or 15 from then.</li>
                    <li>When controlling a plugin, it will toggle the plugin map edit mode. You are then able to edit your plugin mapping</li>
                </ul>
                <li><b>Left Shift:</b> Toggle following the cursor</li>

            </ul>
        </ol>
    `,
    },
  ],
};
