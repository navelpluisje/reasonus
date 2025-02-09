export default {
  title: "Automation",
  color: "blue",
  type: "image",
  image: "controller-automation.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
    <ol>
      <li><b>Latch:</b></li>
      <ul>
        <li><b>Default:</b> Engages Latch Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Save your session.</li>
        <li><b>Left Shift:</b> Engages Latch Automation globally.</li>
      </ul>
      <li><b>Trim:</b></li>
      <ul>
        <li><b>Default:</b> Engages Trim Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Redo the last action.</li>
        <li><b>Left Shift:</b> Engages Trim Automation globally.</li>
      </ul>
      <li><b>Off:</b></li>
      <ul>
        <li><b>Default:</b> Engages Latch Preview Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Undo the last action.</li>
        <li><b>Left Shift:</b> Engages Latch Preview Automation globally.</li>
      </ul>
      <li><b>Read:</b></li>
      <ul>
        <li><b>Default:</b> Engages Read Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Not implemented yet.</li>
        <li><b>Left Shift:</b> Engages Read Automation globally.</li>
      </ul>
      <li><b>Write:</b></li>
      <ul>
        <li><b>Default:</b> Engages Write Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Not implemented yet.</li>
        <li><b>Left Shift:</b> Engages Write Automation globally.</li>
      </ul>
      <li><b>Touch:</b></li>
      <ul>
        <li><b>Default:</b> Engages Touch Automation on currently selected track.</li>
        <li><b>Left Shift:</b> Not implemented yet.</li>
        <li><b>Left Shift:</b> Engages Touch Automation globally.</li>
      </ul>
    </ol>
    `,
    },
  ],
};
