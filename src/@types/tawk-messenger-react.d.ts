declare module '@tawk.to/tawk-messenger-react' {
    import { Component, RefObject } from 'react';
  
    interface TawkMessengerReactProps {
      propertyId: string;
      widgetId: string;
      useRef?: RefObject<TawkMessengerReact | null>;
    }
  
    class TawkMessengerReact extends Component<TawkMessengerReactProps> {
      minimize: () => void;
      maximize: () => void;
      hide: () => void;
      show: () => void;
    }
  
    export default TawkMessengerReact;
  }
  