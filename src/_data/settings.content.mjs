export default {
  title: "Settings",
  color: "red",
  type: "image",
  image: "/images/settings.webp",
  imageAlt: "The Faderport transport controlls",
  blocks: [
    {
      content: `
<p>After installation you have to change some settings to make it work.</p>
<p>First of all you should select the correct <b>Control surface mode</b>. Select <b>ReaSonus FaderPort</b> and the settings as displayed in the image should appear:</p>
<ul>
    <li><b>Surface:</b> Select your controller here.</li>
    <li><b>MIDI In:</b> Select the proper MIDI Input</li>
    <li><b>MIDI Out:</b> Select the proper MIDI Input</li>
</ul>
<p>These should get you started with the FaderPort.Beside these there are a couple of settings to make your life easier:</p>
<ul>
    <li><b>Disable Plugin Control*:</b> If you use another controller for controlling the plugins, you can select this. 
        The plugins mode is still active and you are still able to open the plugin window. 
        From that point, the ReaSonus FaderPort will not do anything anymore for the plugins</li>
    <li><b>Swap Shift buttons*:</b> This swaps the left and right Shift button.</li>
    <li><b>Mute/Solo momentary:</b> When set, it will make the Solo and Mute buttons momentary.
    The timeout for being momentary is 500 milli seconds. In short: If you press the solo button longer then 500ms
    and release it, it will instant unsolo again</li>
</ul>
<blockquote>Settings marked with a \'*\' have no effect on the FaderPort V2</blockquote>
<p>The Documentation button should open your default browser and open this website</p>
        `,
    },
  ],
};
