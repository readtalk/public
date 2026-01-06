import { useState } from "react";

export default function CopyProfile() {
  const [ok, setOk] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setOk(true);
    setTimeout(() => setOk(false), 1500);
  };

  return (
    <button onClick={copy} className="copy-btn">
      {ok ? "Copied ✓" : "Copy Profile"}
    </button>
  );
}
