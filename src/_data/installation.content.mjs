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
      title: "Manual installation",
      content: `
        <p>Currently the only way of installing <b>ReaSonus Native</b> is by downloading the latest version and manually install it. The plan it to make it available for ReaPack.</p>
        <p>
            <a class="button" href="https://github.com/navelpluisje/Reasonus-Native/releases/latest">Download <b>ReaSonus Native</b></a>
        </p>
        <p>In Reaper go to <i>Options &gt; Show REAPER resource in Explorer/Finder</i>, this will open the folder with all the REAPER files. In this folder open the <i>UserPlugins</i> folder and copy the downloaded ReaSonus extension into this folder</p>
    `,
    },
    {
      title: "Nice Extra&acute;s",
      content: `
            <p>
                REAPER does not reinitialize midi devices when they get activated with REAPER already running. You can in that case open the preferences, open the settings page of <b>ReaSonus Native</b> under <i>Control/OSC/Web</i> and close it again. <br/>
                To make this a bit easier you could add another extension named <b>reaper_automidireset</b>. This will do all this automated and in the background. More info here <a href="https://forum.cockos.com/showthread.php?t=257649">on the Forum</a>
            </p>
        `,
    },
  ],
};
