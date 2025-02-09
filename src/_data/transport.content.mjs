export default {
  title: "Transport",
  color: "blue",
  type: "image",
  image: "controller-transport.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
        <ol>
            <li><b>Stop:</b> Stops playback.</li>
            <li><b>Loop:</b> Engages / disengages Looping</li>
            <li><b>Play / Pause:</b> Starts playback at the current playback- cursor position. Press again to pause playback.</li>
            <li><b>Rewind:</b> 
                <ul>
                    <li><b>Default:</b> Rewinds in a slow pace. You can toggle the speed by pressing the button. All the other keys will stop the rewind</li>
                    <li><b>[Left Shift]:</b> Go to the start of the project</li>
                </ul>
            </li>
            <li><b>Fast Forward:</b> 
                <ul>
                    <li><b>Default:</b> Fast Forwards in a slow pace. You can toggle the speed by pressing the button. All the other keys will stop the Fast Forward</li>
                    <li><b>[Left Shift]:</b> Go to the end of the project</li>
                </ul>
            </li>
            <li><b>Record:</b> Press to start recording at the current playback-cursor position for record-enabled tracks.</li>
        </ol>
    `,
    },
  ],
};
