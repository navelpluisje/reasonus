export default {
  title: "Filters Management",
  color: "gray",
  type: "image",
  image: "/images/filter-management.webp",
  imageAlt: "",
  blocks: [
    {
      content: `
            <p><b>ReaSonus Native</b> has the ability to create and manage your own track filters. The filters are based on file names with additional options. To open the window click the <b>Macro</b>-button.</p>
            <h3>Adding and removing filters</h3>
            <p>The left side of the window contains the list with available filters. If you want to delete a filter, select the filter in the list and click the 'minus' button under the list</p>
            <p>Adding a new filter is as simple as deleting one. Click the 'plus' button to create a new one.</p>
            <p>By selecting a filter and use the arrow buttons you are able to change the order of the filters. This is also the order in which the filters are displayed.</p>
            <h3>The Filter Options</h3>
            <p>The first match the filter makes is by name. If no name is provided, no tracks will be visible by selecting that filter. After the name the filter is checking by the given options.
            <ul>
              <li><b>Filter name:</b> The name of the filter. This will be the name used in the list on the left side and in the displays of the controller.</li>
              <li><b>Filter text:</b> Adding a text can be done by entering it in the input field and click the 'plus' button. Removing an item can be done by selecting it and clicking the 'minus' button under the list.</li>
              <li><b>Show track siblings:</b> Show all the sibbling tracks of matching tracks</li>
              <li><b>Show track parents:</b> Show all parent tracks of matching tracks</li>
              <li><b>Show track children:</b> Show all the child tracks of matching tracks</li>
              <li><b>Show only top level tracks:</b> Shows only the filtered tracks if they are top-level</li>
              <li><b>Match multiple:</b> By default the names wil only match the first item. Enabling this option will show all matches</li>
            </ul>
        `,
    },
  ],
};
