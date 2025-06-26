export default {
  title: "Remove old version",
  color: "gray",
  type: "default",
  image: "/images/function-control.webp",
  imageAlt: "",
  blocks: [
    {
      content: `
        <p>
          If you had the 'old' ReaSonus version installed, installing the new one will leave you with some artifacts.
          Within the Actions List there is a huge list of old ReaSonus actions that addde some of the logic. You do not need them anymore.
        </p>
        <h3>Step 1</h3>
        <p>First we will remove all the actions from the list. This can be done by going to the Reaper resource folder. Once in the folder:</p>
        <ul>
          <li>Search for <code>reaper-kb.ini</code> and make a copy of it (just to be sure)</li>
          <li>Open the file in your editor of choice</li>
          <li>
            There will be a list of lines like<br/>
            <code>SCR 4 0 REASONUS_ALWAYS_ON "Reasonus: Always On" Reasonus/always-on.lua</code><br/>
            All the lines with <code>REASONUS_</code> in it can be removed. Please take care not to remove other lines
          </li>
          <li>Save your changes and step 1 is done</li>
        </ul>
        <h3>Step 2</h3>
        <p>Now we will remove all the actual files with th scripts</p>
        <ul>
          <li>In the Reaper resource folder is a folder named <code>Scripts</code>. Open this folder</li>
          <li>Inside this folder you'll see all scripts added by either yourself or other script makers</li>
          <li>Therer should be a folder named: <code>Reasonus</code>, and remove it</li>
          <li>We're done</li>
        </ul>
        <p>When you now restart Reaper and go to the actions list all the old ReaSonus scripts should be gone.</p>
        `,
    },
  ],

};
