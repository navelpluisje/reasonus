export default {
  title: "Session Navigator",
  color: "blue",
  type: "image",
  image: "/images/controller-session.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
        <p>The Session Navigator provides quick navigation and session controlls. Each button alters the functions of the push-button encoder and the Next and Prev buttons on either side.</p>
        <ol>
            <li><b>Channel:</b> Control channel scrolling</li>
            <ul>
                <li><b>Previous:</b></li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 1 track</li>
                    <li><b>Left Shift:</b>  Moves the faderbank by steps of 8/16 tracks</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 1 track</li>
                    <li><b>Left Shift:</b>  Moves the faderbank by steps of 8/16 tracks</li>
                </ul>
                <li><b>Encoder Click:</b> Not implemented</li>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 8/16 tracks</li>
                    <li><b>Left Shift:</b>  Moves the faderbank by steps of 1 track</li>
                </ul>

            </ul>
            <li><b>Master:</b> Control the master channel</li>
            <ul>
                <li><b>Previous:</b></li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 1 track</li>
                    <li><b>Left Shift:</b> Moves the faderbank by steps of 8/16 tracks</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Sets the volume for the master track</li>
                    <li><b>Left Shift:</b> Set the pan, or left pan for the master track</li>
                    <li><b>Right Shift:</b> Set the width, or right pan for the master track</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Not implemented</li>
                    <li><b>Left Shift:</b> Reset the pan, or left pan for the master track</li>
                    <li><b>Right Shift:</b> Reset the width, or right pan for the master track</li>
                </ul>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 1 track</li>
                    <li><b>Left Shift:</b> Moves the faderbank by steps of 8/16 tracks</li>
                </ul>
            </ul>
            <li><b>Zoom:</b> Handle zooming the navigator in Reaper</li>
            <ul>
                <li><b>Previous:</b></li>
                <ul>
                    <li><b>Default:</b> Zoom Reaper out horizontal</li>
                    <li><b>Left Shift:</b> Zoom Reaper out vertical</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Zoom Reaper in/out horizontal</li>
                    <li><b>Left Shift:</b> Zoom Reaper in/out vertical</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Toggle track zoom to minimum height</li>
                    <li><b>Left Shift:</b> Toggle track zoom to maximum height</li>
                </ul>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Zoom Reaper in horizontal</li>
                    <li><b>Left Shift:</b>  Zoom Reaper in vertical</li>
                </ul>

            </ul>
            <li><b>Click:</b> Handle the different metronome functions</li>
            <ul>
                <li><b>Previous:</b> Set metronome speed to 1x</li>
                <li><b>Encoder:</b> Adjust the Metronome volume</li>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Toggle metronome on/off</li>
                    <li><b>Left Shift:</b> Show metronome/pre-roll settings</li>
                </ul>
                <li><b>Next:</b> Set metronome speed to 2x</li>

            </ul>
            <li><b>Scroll:</b> Handle scrolling the navigator in Reaper</li>
            <ul>
                <li><b>Previous:</b></li>
                <ul>
                    <li><b>Default:</b> Scroll Reaper up</li>
                    <li><b>Left Shift:</b>  Scroll Reaper left</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Scroll Reaper up/down</li>
                    <li><b>Left Shift:</b>  Scroll Reaper left/right</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Vertical scroll selected tracks into view</li>
                    <li><b>Left Shift:</b> Horizontal scroll to put play cursor at 50%</li>
                </ul>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Scroll Reaper down</li>
                    <li><b>Left Shift:</b> Scroll Reaper right</li>
                </ul>
                
            </ul>
            <li><b>Section:</b> Handle adding, deleting and editing regions</li>
            <ul>
                <li><b>Previous:</b> Filter all tracks with Virtual Instruments</li>
                <ul>
                    <li><b>Default:</b> Goto/select previous marker/region</li>
                    <li><b>Left Shift:</b> Set the start point for a new section</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Move edit cursor forward/backward one beat</li>
                    <li><b>Left Shift:</b> Move cursor left/right one pixel</li>
                    <li><b>Right Shift:</b> Move cursor left/right, creating time selection</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Edit region near cursor</li>
                    <li><b>Left Shift:</b> Insert region from time selection and edit</li>
                    <li><b>Right Shift:</b> Delete region near cursor</li>
                </ul>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Goto/select next marker/region</li>
                    <li><b>Left Shift:</b> Set the end point for a new section</li>
                </ul>

            </ul>
            <li><b>Bank:</b>  Control bank scrolling. Depending on your controller with 8 or 16 channels</li>
            <ul>
                <li><b>Previous:</b> </li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 8/16 tracks</li>
                    <li><b>Left Shift:</b> Moves the faderbank by steps of 1 track</li>
                </ul>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 8/16 tracks</li>
                    <li><b>Left Shift:</b> Moves the faderbank by steps of 1 track</li>
                </ul>
                <li><b>Encoder Click:</b> Not implemented</li>
                <li><b>Next:</b> </li>
                <ul>
                    <li><b>Default:</b> Moves the faderbank by steps of 8/16 tracks</li>
                    <li><b>Left Shift:</b> Moves the faderbank by steps of 1 track</li>
                </ul>

            </ul>
            <li><b>Marker:</b> Handle adding, deleting and editing markers</li>
            <ul>
                <li><b>Previous:</b> Goto/select previous marker/region</li>
                <li><b>Encoder:</b> </li>
                <ul>
                    <li><b>Default:</b> Move edit cursor forward/backward one beat</li>
                    <li><b>Left Shift:</b> Move cursor left/right one pixel</li>
                </ul>
                <li><b>Encoder Click:</b> </li>
                <ul>
                    <li><b>Default:</b> Insert marker at current position</li>
                    <li><b>Left Shift:</b> Insert and/or edit marker at current position</li>
                    <li><b>Right Shift:</b> Delete marker near cursor</li>
                </ul>
                <li><b>Next:</b> Goto/select next marker/region</li>

            </ul>
        </ol>
    `,
    },
  ],
};
