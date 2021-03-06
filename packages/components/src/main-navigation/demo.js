const React = require("react");
const MainNavigation = require(".");
const { NavigationToolbar } = require(".");
const Themer = require("../demo-themer");
const Button = require("../button");

const navigation = {
  children: [
    {
      contents: "",
      name: "atoms",
      active: true,
      manifest: {
        version: "1.0.0",
        flag: "alpha",
        options: {
          icon: "atoms"
        },
        name: "atoms",
        displayName: "Atoms"
      },
      id: "atoms",
      path: ["atoms"],
      href: "/atoms",
      type: "folder",
      children: [
        {
          contents: "",
          name: "nested",
          active: true,
          manifest: {
            options: {},
            name: "nested",
            displayName: "Nested"
          },
          id: "atoms/nested",
          path: ["atoms", "nested"],
          type: "folder",
          href: "/atoms/nested",
          children: [
            {
              contents: "",
              name: "icon",
              active: false,
              manifest: {
                version: "1.0.0",
                flag: "alpha",
                options: {},
                name: "icon",
                displayName: "Icon"
              },
              id: "atoms/nested/icon",
              path: ["atoms", "icon"],
              href: "/atoms/nested/icon",
              type: "pattern",
              dependents: [
                "molecules/button",
                "molecules/main-logo",
                "molecules/navigation-item"
              ],
              envs: ["dark", "index"]
            }
          ]
        }
      ]
    },
    {
      contents: "",
      name: "molecules",
      manifest: {
        version: "1.0.0",
        flag: "alpha",
        options: {
          icon: "molecules"
        },
        name: "molecules",
        displayName: "Molecules"
      },
      id: "molecules",
      path: ["molecules"],
      href: "/molecules",
      type: "folder",
      children: []
    },
    {
      contents: "",
      name: "organisms",
      manifest: {
        version: "1.0.0",
        flag: "alpha",
        options: {
          icon: "organisms"
        },
        name: "organisms",
        displayName: "Organisms"
      },
      id: "organisms",
      path: ["organisms"],
      href: "/organisms",
      type: "folder",
      children: []
    },
    {
      contents: "",
      name: "pages",
      manifest: {
        version: "1.0.0",
        flag: "alpha",
        options: {},
        name: "pages",
        displayName: "Pages"
      },
      id: "pages",
      path: ["pages"],
      href: "/pages",
      type: "folder",
      children: []
    },
    {
      contents: "",
      name: "templates",
      manifest: {
        version: "1.0.0",
        flag: "alpha",
        options: {},
        name: "templates",
        displayName: "Templates"
      },
      id: "templates",
      path: ["templates"],
      href: "/templates",
      type: "folder",
      children: []
    }
  ]
};

const docs = {
  children: [
    {
      contents: "",
      name: "documentation",
      manifest: {
        version: "1.0.0",
        flag: "alpha",
        options: {
          icon: "documentation"
        },
        name: "documentation",
        displayName: "Documentation"
      },
      id: "documentation",
      path: ["documentation"],
      href: "/documentation"
    }
  ]
};

module.exports.default = function MainNavigationDemo() {
  return (
    <Themer>
      <MainNavigation
        docs={docs}
        navigation={navigation}
        applicationTitle="Patternplate"
      >
        <NavigationToolbar>
          <ToolbarButton item="react" />
          <ToolbarButton item="search" />
          <ToolbarButton item="reload" />
        </NavigationToolbar>
      </MainNavigation>
    </Themer>
  );
};

function ToolbarButton(props) {
  return <Button type="link" symbol={props.item} frameless transparent />;
}
