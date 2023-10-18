import './logo.css'

export const Logo = ({
    width,
    height
}: any) => {
    const defaultWidth = 500;
    const defaultHeight = 625;
    if (!width && !height) {
        width = defaultWidth;
        height = defaultHeight;
    } else if (!width && height) {
        width = height * (defaultWidth / defaultHeight)
    } else if (width && !height) {
        height = width * (defaultHeight / defaultWidth)
    }
    return (
        <img src='/logo.png' width={String(width)} height={String(height)} />
    )
};