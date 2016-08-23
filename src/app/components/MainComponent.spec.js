import {MainComponent} from './MainComponent.react';

describe('MainComponent', () => {
  let mainComponent;

  beforeEach(() => {
    mainComponent = new MainComponent();
  });

  it('should add two numbers', () => {
    let sum = mainComponent.add(1, 4);
    expect(sum).toBe(5);
  });

  it('should subtract two numbers', () => {
    let sum = mainComponent.subtract(4, 1);
    expect(sum).toBe(3);
  });
});
