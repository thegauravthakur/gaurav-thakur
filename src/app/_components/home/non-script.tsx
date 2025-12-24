interface NonScriptProps {
  style?: string;
}

export function NonScript({ style }: NonScriptProps) {
  return <noscript>{style && <style>{style}</style>}</noscript>;
}
