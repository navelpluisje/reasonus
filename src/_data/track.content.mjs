export default {
  type: "image",
  title: "Track",
  color: "green",
  image: "/images/track-automation.svg",
  blocks: [
    {
      content: `
        <p>The Faderport has a single fader that is mostly used for the selected track. 7 of the top 8 buttons controll theh selected track.</p>
    `,
    },
    {
      title: "Buttons",
      content: `
      <ol>
        <li><b>Solo:</b></li>
        <ul>
          <li><b>Default:</b> Isolates the selected Track output signal in the mix.</li>
          <li><b>Long Press:</b> Holding the Solo button for longer then half a second makes the button momentary. This means that after releasing the button after that half a second, the value will go to the previous value after release. This can be helpfull for quickly checking a track soloed.</li>
          <li><b>Shift:</b> Unsolo all the soloed tracks.</li>
          </ul>
          <li><b>Mute:</b></li>
          <ul>
          <li><b>Default:</b> Mutes the selected Track output signal.</li>
          <li><b>Long Press:</b> Holding the Mute button for longer then half a second makes the button momentary. This means that after releasing the button after that half a second, the value will go to the previous value after release. This can be helpfull for quickly checking with the track muted.</li>
          <li><b>Shift:</b> Unmute all the muted tracks.</li>
        </ul>
        <li><b>Arm:</b></li>
        <ul>
          <li><b>Default:</b> Arm the selected Track for recording.</li>
          <li><b>Shift:</b> Arm all tracks for recording.</li>
        </ul>
        <li><b>Shift:</b> Speaks for itself I hope/</li>
        <li><b>Bypass:</b></li>
        <ul>
          <li><b>Default:</b> Toggle Bypass all the effects for the selected Track.</li>
          <li><b>Shift:</b> Toggle Bypass for all tracks.</li>
        </ul>
        <li><b>Touch:</b></li>
        <ul>
          <li><b>Default:</b> Engages Touch Automation for the selected track.</li>
          <li><b>Shift:</b> Engages Latch Automation for the selected track.</li>
        </ul>
        <li><b>Write:</b></li>
        <ul>
          <li><b>Default:</b> Engages Write Automation for the selected track.</li>
          <li><b>Shift:</b> Engages Trim Automation for the selected track.</li>
        </ul>
        <li><b>Read:</b></li>
        <ul>
          <li><b>Default:</b> Engages Read Automation for the selected track.</li>
          <li><b>Shift:</b> Engages Latch Preview Automation for the selected track.</li>
        </ul>
      </ol>

      `,
    },
  ],
};
