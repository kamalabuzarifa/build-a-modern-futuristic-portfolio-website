import { useEffect, useState } from "react";

interface TypingTextProps {
  items: string[];
}

export function TypingText({ items }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index] ?? "";
    const timeout = setTimeout(
      () => {
        if (!deleting && value.length < current.length) {
          setValue(current.slice(0, value.length + 1));
        } else if (!deleting && value.length === current.length) {
          setDeleting(true);
        } else if (deleting && value.length > 0) {
          setValue(current.slice(0, value.length - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % items.length);
        }
      },
      deleting ? 60 : 110
    );

    return () => clearTimeout(timeout);
  }, [value, deleting, index, items]);

  return (
    <span className="inline-flex min-h-8 items-center text-neon-cyan">
      {value}
      <span className="ml-1 h-6 w-0.5 animate-pulse bg-neon-cyan" />
    </span>
  );
}
