import React, { ReactNode } from "react";
import { shallow } from "enzyme";
import Toast from './Toast';

function getPropsWithVariant(variant: string) {
  return {
    children: 'This is a fantastic toast!',
    variant: variant,
    duration: 1000,
    withCloseIcon: false,
    remove: (id: string) => { }
  }
}

function getPropsWithCloseIcon(withCloseIcon: boolean) {
  return {
    children: 'This is a fantastic toast!',
    variant: 'default',
    duration: 1000,
    ...(withCloseIcon && { withCloseIcon }),
    remove: (id: string) => { }
  }
}

describe("Variants: ", () => {
  describe("When render a default toast, ", () => {
    it("it should have the correct classes", () => {
      const props = getPropsWithVariant('default');
      const renderWrapper = () => shallow(<Toast {...props} />);

      expect(renderWrapper()).toMatchSnapshot();
    });
  });

  describe("When render a primary toast, ", () => {
    it("it should have the correct classes", () => {
      const props = getPropsWithVariant('primary');
      const renderWrapper = () => shallow(<Toast {...props} />);

      expect(renderWrapper()).toMatchSnapshot();
    });
  });

  describe("When render a success toast, ", () => {
    it("it should have the correct classes", () => {
      const props = getPropsWithVariant('success');
      const renderWrapper = () => shallow(<Toast {...props} />);

      expect(renderWrapper()).toMatchSnapshot();
    });
  });

  describe("When render a danger toast, ", () => {
    it("it should have the correct classes", () => {
      const props = getPropsWithVariant('danger');
      const renderWrapper = () => shallow(<Toast {...props} />);

      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});


describe("CloseIcon: ", () => {
  describe("When withCloseIcon is not set, ", () => {
    it("should not render a closeIcon element", () => {
      const props = getPropsWithCloseIcon(false);
      const renderWrapper = () => shallow(<Toast {...props} />);

      expect(renderWrapper()).toMatchSnapshot();
    });
  });

  describe("When withCloseIcon is set, ", () => {
    it("should render a closeIcon element", () => {
      const props = getPropsWithCloseIcon(true);
      const renderWrapper = () => shallow(<Toast {...props} />);

      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
