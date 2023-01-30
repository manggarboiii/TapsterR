import {useState} from 'react'
import './CopyButton.css';

function CopyButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <div className="box">
    <button className="urlcontainer" onClick={handleCopyClick}>
      {isCopied ? 'Copied!' : 'Copy URL'}
      <i class="fa-regular fa-copy"></i>
    </button>
    </div>
  )
}

export default CopyButton