export default {
  title: "Session Navigator",
  color: "blue",
  type: "image",
  image: "/images/controller-session-v2.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
        <p>The Session Navigator provides quick navigation and session controlls. Buttons 2 till 8 alters the functions of the push-button encoder and the Previous (Undo) and Next (Redo) buttons on either side.</p>
        <p>Pressing <b>Shift + Undo</b> will Undo the last action and pressing <b>Shift + Redo</b> will Redo the last action in most of the cases, unless otherwise stated below.</p>
        <p>Pressing <b>Shift + Encoder click</b> will save the project in some of the cases, unless otherwise stated below.</p>
        <ol>
            <li><b>Link:</b> The previous, next and encoder will keep the last function.</li>
            <ul>
                <li><b>Default:</b> The odd one of the list. This one toggle the Last Touched FX Param mode. This will enable you to controll the last touched FX parameter with the fader for creating better automation envelopes.</li>
                <li><b>Shift:</b> Toggle following the cursor while playing</li>
            </ul>
            <li><b>Master:</b> In master mode the Fader controlls the master volume and the encoder is used for panning</li>
            <ul>
                <li><b>Previous:</b> Select the previous track.</li>
                <li><b>Encoder:</b></li>
                <ul>
                    <li><b>Default:</b> Set the pan, or left pan for the master track</li>
                    <li><b>Shift:</b> Set the width, or right pan for the master track</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Set the pan, or left pan to the center value</li>
                    <li><b>Shift:</b> Set the width, or right pan to the center value</li>
                </ul>
                <li><b>Next:</b>  Select the next track.</li>
            </ul>
            <li><b>Pan:</b> Read more on pan modes below</li>
            <ul>
                <li><b>Previous:</b> Select the previous track.</li>
                <li><b>Encoder:</b></li>
                <ul>
                    <li><b>Default:</b> Set the pan, or left pan for the selected track</li>
                    <li><b>Shift:</b> Set the width, or right pan for the selected track</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Set the pan, or left pan to the center value</li>
                    <li><b>Shift:</b> Set the width, or right pan to the center value</li>
                </ul>
                <li><b>Next:</b> Select the next track.</li>
            </ul>
            <li><b>Click:</b> Handle the different metronome functions</li>
            <ul>
                <li><b>Previous:</b> Set metronome speed to 1x</li>
                <li><b>Encoder:</b> Adjust the Metronome volume</li>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Toggle metronome on/off</li>
                    <li><b>Shift:</b> Show metronome/pre-roll settings</li>
                </ul>
                <li><b>Next:</b> Set metronome speed to 2x</li>

            </ul>
            <li><b>Channel:</b> Control channel scrolling</li>
            <ul>
                <li><b>Previous:</b> Select the previous track.</li>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 1 track</li>
                </ul>
                <li><b>Encoder Click:</b> Not implemented</li>
                <li><b>Next:</b>  Select the next track.</li>

            </ul>
            <li><b>Section:</b> Handle adding, deleting and editing regions. Pressing this button wile in the Section mode, will open the edit Region window</li>
            <ul>
                <li><b>Previous:</b></li>
                <ul>
                    <li><b>Default:</b> Goto/select previous marker/region</li>
                    <li><b>Shift:</b> Set the start point for a new section</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Move edit cursor forward/backward one beat</li>
                    <li><b>Shift:</b> Move cursor left/right one pixel</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Insert region from time selection and edit...</li>
                    <li><b>Shift:</b> Delete region near cursor</li>
                </ul>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Goto/select next marker/region</li>
                    <li><b>Shift:</b> Set the end point for a new section</li>
                </ul>

            </ul>
            <li><b>Scroll:</b> Handle scrolling the navigator in Reaper</li>
            <ul>
                <li><b>Previous:</b></li>
                <ul>
                    <li><b>Default:</b> Scroll Reaper up</li>
                    <li><b>Shift:</b> Scroll Reaper left</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Scroll Reaper up/down</li>
                    <li><b>Shift:</b> Scroll Reaper left/right</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Vertical scroll selected tracks into view</li>
                    <li><b>Shift:</b> Horizontal scroll to put play cursor at 50%</li>
                </ul>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Scroll Reaper down</li>
                    <li><b>Left Shift</b> Scroll Reaper right</li>
                </ul>
                
            </ul>
            <li><b>Marker:</b> Handle adding, deleting and editing markers. Pressing this button wile in the Marker mode, will add a marker at the current position</li>
            <ul>
                <li><b>Previous:</b> Goto/select previous marker/region</li>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Move edit cursor forward/backward one beat</li>
                    <li><b>Shift:</b> Move cursor left/right one pixel</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Insert and/or edit marker at current position</li>
                    <li><b>Shift:</b> Delete marker near cursor</li>
                </ul>
                <li><b>Next:</b> Goto/select next marker/region</li>
            </ul>
        </ol>
        
        <br />
        <h4>Alternative functionality</h4>
        <ul>
            <li><b>Zoom (Shift+Scroll):</b> Handle zooming the navigator in Reaper</li>
            <ul>
                <li><b>Previous:</b></li>
                <ul>
                    <li><b>Default:</b> Zoom Reaper out horizontal</li>
                    <li><b>Shift:</b> Zoom Reaper out vertical</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Zoom Reaper in/out horizontal</li>
                    <li><b>Shift:</b> Zoom Reaper in/out vertical</li>
                </ul>
                <ul>
                    <li><b>Default:</b> Toggle track zoom to minimum height</li>
                    <li><b>Shift:</b> Toggle track zoom to maximum height</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Zoom Reaper in horizontal</li>
                    <li><b>Shift:</b>  Zoom Reaper in vertical</li>
                </ul>
            </ul>
            <li><b>Flip (Shift+Pan):</b> Toggle the Filter Management window</li>
            <li><b>Lock (Shift+Channel):</b> Not implemented. If you have any suggestion, feel free to let me know</li>
        </ul>
    `,
    },
  ],
  extra: [
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
