export default {
  title: "Mix Management",
  color: "blue",
  type: "image",
  image: "/images/controller-mix-management.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
        <p>Mix management houses a serie of filters to filter the tracks to ease your mixing even more. Here a description of all the filter options available</p>
        <ol>
            <li><b>Audio:</b> Filter all theh tracks that have audio items in them.</li>
            <li><b>VI:</b></li>
            <ul>
                <li><b>Default:</b> Filter all tracks with Virtual Instruments</li>
                <li><b>Left Shift:</b> Filter all tracks with MIDI items</li>

            </ul>
            <li><b>Bus:</b> </li>
            <ul>
                <li><b>Default:</b> Show only the top level tracks</li>
                <li><b>Left Shift:</b> Filter all the tracks with hardware outputs</li>
                <li><b>Right Shift:</b> Filter all the folder tracks</li>

            </ul>
            <li><b>VCA:</b> </li>
            <ul>
                <li><b>Default:</b> Filter all the VCA tracks</li>
                <li><b>Left Shift:</b> Filter all the tracks with effects attached to them</li>
                <li><b>Right Shift:</b> Filter all the tracks with receives</li>

            </ul>
            <li><b>All:</b> </li>
            <ul>
                <li><b>Default:</b> Reset all the filter and show all the tracks</li>
                <li><b>Left Shift:</b> Show the custom menu's. This will display all your fiolters in the track displays. Use the select button to select the filter</li>
                <li><b>Right Shift:</b> Filter all the tracks with sends</li>

            </ul>

        </ol>
    `,
    },
  ],
};
