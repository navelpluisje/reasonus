export default {
  title: "Automation",
  color: "blue",
  type: "image",
  image: "/images/controller-automation.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
    <ol>
      <li><b>Latch:</b></li>
      <ul>
        <li><b>Default:</b> Engages Latch Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Save your session.</li>
        <li><b>Right Shift:</b> Engages Latch Automation globally.</li>
      </ul>
      <li><b>Trim:</b></li>
      <ul>
        <li><b>Default:</b> Engages Trim Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Redo the last action.</li>
        <li><b>Right Shift:</b> Engages Trim Automation globally.</li>
      </ul>
      <li><b>Off:</b></li>
      <ul>
        <li><b>Default:</b> Engages Latch Preview Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Undo the last action.</li>
        <li><b>Right Shift:</b> Engages Latch Preview Automation globally.</li>
      </ul>
      <li><b>Touch:</b></li>
      <ul>
        <li><b>Default:</b> Engages Touch Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Opens the menu. Within the menu you can set all the options available in the settings screen. You can use the pan encoder to select the item and set a value. With pressing you confirm your options. All changes are applied instant, so no reload of the surface. Pressing the button combination again, will get you to the previous mode. The last display will show the version number of <b>ReaSonus Native</b></li>
        <li><b>Right Shift:</b> Engages Touch Automation globally.</li>
      </ul>
      <li><b>Write:</b></li>
      <ul>
      <li><b>Default:</b> Engages Write Automation on currently selected track.</li>
      <li><b>Left Shift:</b> Not implemented yet.</li>
      <li><b>Right Shift:</b> Engages Write Automation globally.</li>
      </ul>
      <li><b>Read:</b></li>
      <ul>
        <li><b>Default:</b> Engages Read Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Not implemented yet.</li>
        <li><b>Right Shift:</b> Engages Read Automation globally.</li>
      </ul>
    </ol>
    `,
    },
  ],
  extra: [
    {
      title: "More about Automation Modes",
      description: `<p>More info about automation modes can be found in <a href="https://reaper.blog/2017/07/reaper-automation-modes-explained/" target="_blank">this video by The REAPER Blog</a>.</p>`,
    },
  ],
};
