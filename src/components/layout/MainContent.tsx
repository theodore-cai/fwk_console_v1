import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

function MainContent({ children }: MainContentProps) {
  return <div style={{ padding: '28px' }}>{children}</div>;
}

export default MainContent;
