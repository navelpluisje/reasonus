export default {
  title: "Installation",
  color: "red",
  type: "image",
  image: "/images/icon-github-color.svg",
  blocks: [
    {
      title: "Before you start",
      content: `
        <p><b>ReaSonus Native</b> has the following dependencies:</p>
        <ul>
            <li><b>SWS:</b> If you have not installed it yet, you can download it from the <a href="https://www.sws-extension.org" target="_blank">SWS website</a></li>
        </ul>
        <p>Also your <b>FaderPort</b> should be in Studio One mode. You can check the manual for more info about that</p>
        `,
    },
    {
      title: "ReaPack",
      content: `
        <p>By far the easiest way to install <b>ReaSonus</b> Native is via <b>ReaPack</b>.<br/>In REAPER open <b>ReaPack</b>, search for 'ReaSonus'. Select 'ReaSonus Native' and install it.</p>
    `,
    },
    {
      title: "Manual installation",
      content: `
        <p>For manual install <b>ReaSonus Native</b> you have to download the latest version and move it to the correct folder</p>
        <p>
            <a class="button" href="https://github.com/navelpluisje/Reasonus-Native/releases/latest" target="_blank">Download <b>ReaSonus Native</b></a>
        </p>
        <p>
          In Reaper, go to Options->Show REAPER resource in Explorer/Finder.
          This will open the folder with all the REAPER files.
          In this folder, open the UserPlugins folder and copy the downloaded ReaSonus extension to the folder. </p>
    `,
    },
    {
      title: "Nice Extras",
      content: `
            <p>
                REAPER does not reinitialize midi devices when they get activated with REAPER already running. You can in that case open the preferences, open the settings page of <b>ReaSonus Native</b> under <i>Control/OSC/Web</i> and close it again. <br/>
                To make this a bit easier you could add another extension named <b>reaper_automidireset</b>. This performs the reset automatically in the background. More info here <a href="https://forum.cockos.com/showthread.php?t=257649" target="_blank">on the Forum</a>
            </p>
        `,
    },
  ],
};
