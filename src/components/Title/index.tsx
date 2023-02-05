import { TitleProps } from './types';

const Title = ({ label, size, weight, color, isItalic }: TitleProps) => {
  const classNames = `${size} ${weight} ${isItalic ? "italic" : "not-italic"}`;
  return (
    size.includes("h1") ? <h1 style={{ color: color }} className={classNames}>{label}</h1 >
      : size.includes("h2") ? <h2 style={{ color: color }} className={classNames}>{label}</h2>
        : size.includes("h3") ? <h3 style={{ color: color }} className={classNames}>{label}</h3 >
          : size.includes("h4") ? <h4 style={{ color: color }} className={classNames}>{label}</h4 >
            : size.includes("h5") ? <h5 style={{ color: color }} className={classNames}>{label}</h5 >
              : size.includes("h6") ? <h6 style={{ color: color }} className={classNames}>{label}</h6 >
                : <h2 style={{ color: color }} className={classNames}>{label}</h2 >
  )
};

export default Title;
