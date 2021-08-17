interface Props {
  size?: number;
}

export default function CheckIcon({ size = 35 }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.97 17.485C34.97 27.1417 27.1417 34.97 17.485 34.97C7.82827 34.97 0 27.1417 0 17.485C0 7.82827 7.82827 0 17.485 0C27.1417 0 34.97 7.82827 34.97 17.485ZM15.4625 26.7432L28.4353 13.7704C28.8758 13.3299 28.8758 12.6156 28.4353 12.1751L26.84 10.5798C26.3995 10.1393 25.6852 10.1393 25.2446 10.5798L14.6648 21.1595L9.7254 16.2201C9.28489 15.7796 8.57061 15.7796 8.13003 16.2201L6.53474 17.8154C6.09423 18.2559 6.09423 18.9702 6.53474 19.4107L13.8672 26.7431C14.3077 27.1837 15.0219 27.1837 15.4625 26.7432Z"
        fill="#04D361"
      />
    </svg>
  );
}