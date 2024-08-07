const Chevron = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4419 12.9254C15.1979 13.1915 14.8021 13.1915 14.5581 12.9254L10.4419 8.4375C10.1979 8.17138 9.80214 8.17138 9.55806 8.4375L5.44194 12.9254C5.19786 13.1915 4.80214 13.1915 4.55806 12.9254C4.31398 12.6593 4.31398 12.2278 4.55806 11.9617L8.67417 7.47378C9.40641 6.67541 10.5936 6.67541 11.3258 7.47378L15.4419 11.9617C15.686 12.2278 15.686 12.6593 15.4419 12.9254Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};

export default Chevron;
