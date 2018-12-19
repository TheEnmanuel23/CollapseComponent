import React from "react";
import ReactDOM from "react-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import "./styles.css";

class CollapseItem extends React.Component {
  state = { collapsed: false };

  togglePanel = () =>
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));

  render() {
    const { children, title } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="collapse-item">
        <div className="collapse-header" onClick={this.togglePanel}>
          {collapsed ? (
            <Icon icon={ic_keyboard_arrow_down} />
          ) : (
            <Icon icon={ic_keyboard_arrow_right} />
          )}
          <span>{title}</span>
        </div>
        {collapsed && <div className="collapse-panel">{children}</div>}
      </div>
    );
  }
}

const Collapse = ({ children }) => <div className="collapse">{children}</div>;

Collapse.CollapseItem = CollapseItem;

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Collapse>
        <Collapse.CollapseItem title="panel 1">
          <span>
            1 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis laboriosam pariatur quasi et? Nihil non quae vitae quam
            asperiores repellat perferendis doloremque facilis, ducimus eum
            natus, dolorem neque ipsa est?
          </span>
        </Collapse.CollapseItem>
        <Collapse.CollapseItem title="panel 2">
          <p>
            2 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis laboriosam pariatur quasi et? Nihil non quae vitae quam
            asperiores repellat perferendis doloremque facilis, ducimus eum
            natus, dolorem neque ipsa est?
          </p>
        </Collapse.CollapseItem>
      </Collapse>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
