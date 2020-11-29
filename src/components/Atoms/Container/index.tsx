import * as React from 'react';

export interface IContainerProps {}

const Container: React.FC<IContainerProps> = (props) => {
  return (
    <main role="main" className="p-4 w-full">
      {props.children}
    </main>
  );
};
export default Container;
