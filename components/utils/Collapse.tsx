import { useEffect, useRef, useState } from "react";

export default function Collapse({ opened, children }: {
  opened: boolean
  children: React.ReactNode
}) {

  const ref = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState(0);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    setContentHeight(ref.current?.scrollHeight ?? 0);
  }, [children]);

  useEffect(() => {
    if (opened) {
      const delay = setTimeout(() => {
        setFollowed(true);
      }, 300);
      return () => clearTimeout(delay);
    } else {
      setFollowed(false);
    }
  }, [opened]);

  // heights
  // opened: (false -> true) = (0 -> clientHeight(instantly) -> auto(after 0.3s by timeout))
  // opened: (true -> false) = (auto -> clientHeight(instantly) -> 0(instantly))

  const height = (followed && opened) ? 'auto' :
    (followed || opened) ? `${contentHeight}px` : '0';

  return (
    <div style={{
      height,
      overflow: 'hidden',
      transition: `height .3s ease, opacity ${opened ? '.6s' : '.25s'} ease`,
      opacity: opened ? 1 : 0,
    }} ref={ref}>
      {children}
    </div>
  )
}