declare namespace JSX {
  interface IntrinsicElements {
    'lottie-player': {
      src?: string;
      background?: string;
      speed?: string | number;
      style?: React.CSSProperties;
      loop?: boolean;
      autoplay?: boolean;
      controls?: boolean;
      mode?: string;
      direction?: string | number;
      playMode?: string;
      hover?: boolean;
      renderer?: string;
      rendererConfig?: any;
      [key: string]: any;
    };
  }
}
