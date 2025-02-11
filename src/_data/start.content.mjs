export default {
  title: "Let's Start",
  color: "red",
  type: "image",
  image: "/images/favicon.svg",
  imageAlt: "",
  blocks: [
    {
      content: `
        <p>Welcome to <b>ReaSonus Native</b> documentation</p>
        <p>The documentation should guide you through the functionalities of <b>ReaSonus Native</b>. The first part is about installation and settings</p>
        <p>The second part will explain all the controlls of the <b>FaderPort</b>. What they do when, etc.</p>
        <p>The last part explains about the goodies in <b>ReaSonus Native</b> like filter management, managing the functions and plugin mapping</p>
        <p>If one of teh screenshots is not as clear as you would like, open it in real life. Nothing as good as the real deal</p>
    `,
    },
  ],
  extra: [
    {
      title: "Will be appreciated",
      description: `
    <p><b>ReaSonus Native</b> is a free and open source project, but takes some time and effort to create and maintain. 
    It is not required off course but a donation for maintining would be highly appreciated. This will for example be used for maintaining the Windows version, because I do not own a Windows machine.
    </p>
    <p>Donating can be done via the link in the footer.</p>`,
    },
    {
      title: "The big Thanx",
      description: `
      <p>This project would not have been possible without you, reading this. But also a big thanx goes to the following people:</p>
      <ul>
        <li><b>Geoff Waddington</b>, The man behind the impressive CSI. Without the CSI project, this would probably never been created.</li>
        <li><b>Cfillion</b>, for helping me out with some annoyences I raan into with C++ and CMake.</li>
        <li><b>All volunteers</b> helping with testing, reviewing the documentation and being patient.</li>
      </ul>
      `,
    },
  ],
};
