import { useEffect, useState } from 'react';

const Sandbox = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showError, _setShowError] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>React Testing Library Examples</h1>
      <p>You can search me with regular expression: 123-456-7890</p>

      {showError && <p>Error message</p>}
      <ul>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
      <span>info</span>
      <span>info</span>
      <span>info</span>
      {showMessage && <p>Async message</p>}
    </div>
  );
};

export default Sandbox;
