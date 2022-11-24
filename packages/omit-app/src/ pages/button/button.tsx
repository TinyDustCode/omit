import React from "react";
import { Button } from "../../../../omit-design/src";
import { AddCircleIcon, DiscountIcon } from "tdesign-icons-react";

function ButtonPage() {
  return (
    <>
      <div>
        <p>色彩</p>
        <Button></Button>
        <Button theme="primary">primary</Button>
        <Button theme="success">success</Button>
        <Button theme="warning">warning</Button>
        <Button theme="danger">danger</Button>
      </div>
      <div>
        <p>大小</p>
        <Button theme="success">默认</Button>
        <Button theme="success" size="small">
          small
        </Button>
        <Button theme="success" size="medium">
          medium
        </Button>
        <Button theme="success" size="large">
          danger
        </Button>
      </div>
      <div>
        <p>形状</p>
        <Button theme="warning">默认</Button>
        <Button theme="warning" shape="rectangle">
          rectangle
        </Button>
        <Button theme="warning" shape="round">
          round
        </Button>
        <Button theme="warning" shape="circle">
          T
        </Button>
      </div>
      <div>
        <p>Icon</p>
        <Button size="small" icon={<DiscountIcon />} shape="circle" />
        <Button icon={<DiscountIcon />} shape="circle" />
        <Button size="large" icon={<DiscountIcon />} shape="circle" />
        <p>Icon with text</p>
        <Button size="small" icon={<AddCircleIcon />}>
          添加
        </Button>
        <Button icon={<AddCircleIcon />}>添加</Button>
        <Button size="large" icon={<AddCircleIcon />}>
          添加
        </Button>
      </div>
      <div>
        <p>variant outline</p>
        <Button theme="primary" variant="outline">
          primary
        </Button>
        <Button theme="success" variant="outline">
          success
        </Button>
        <Button theme="warning" variant="outline">
          warning
        </Button>
        <Button theme="danger" variant="outline">
          danger
        </Button>
      </div>
      <div>
        <p>variant dashed</p>
        <Button theme="primary" variant="dashed">
          primary
        </Button>
        <Button theme="success" variant="dashed">
          success
        </Button>
        <Button theme="warning" variant="dashed">
          warning
        </Button>
        <Button theme="danger" variant="dashed">
          danger
        </Button>
      </div>
      <div>
        <p>variant text</p>
        <Button theme="primary" variant="text">
          primary
        </Button>
        <Button theme="success" variant="text">
          success
        </Button>
        <Button theme="warning" variant="text">
          warning
        </Button>
        <Button theme="danger" variant="text">
          danger
        </Button>
      </div>
      <div>
        <p>disabled button</p>
        <Button theme="primary" disabled={true}>
          primary
        </Button>
        <Button theme="success" disabled>
          success
        </Button>
        <Button theme="warning" disabled>
          warning
        </Button>
        <Button theme="danger" disabled>
          danger
        </Button>
      </div>
      <div>
        <p>loading button</p>
        <div>
          <Button loading={true}>base</Button>
          <Button variant="outline" loading={true}>
            outline
          </Button>
          <Button variant="dashed" loading={true}>
            dashed
          </Button>
          <Button variant="text" loading={true}>
            text
          </Button>
        </div>
        <div>
          <Button theme="success" loading={true}>
            base
          </Button>
          <Button theme="success" variant="outline" loading={true}>
            outline
          </Button>
          <Button theme="success" variant="dashed" loading={true}>
            dashed
          </Button>
          <Button theme="success" variant="text" loading={true}>
            text
          </Button>
        </div>
        <div>
          <Button theme="warning" loading={true}>
            base
          </Button>
          <Button theme="warning" variant="outline" loading={true}>
            outline
          </Button>
          <Button theme="warning" variant="dashed" loading={true}>
            dashed
          </Button>
          <Button theme="warning" variant="text" loading={true}>
            text
          </Button>
        </div>
        <div>
          <Button theme="danger" loading={true}>
            base
          </Button>
          <Button theme="danger" variant="outline" loading={true}>
            outline
          </Button>
          <Button theme="danger" variant="dashed" loading={true}>
            dashed
          </Button>
          <Button theme="danger" variant="text" loading={true}>
            text
          </Button>
        </div>
      </div>
    </>
  );
}
export default ButtonPage;
