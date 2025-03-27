
import './style.css'
const IconLabel = ({ icon, children, icon2, size, font_size }) => {
    return (
        <div className="icon-label d-flex align-items-center gap-2 py-1 rounded" style={{ fontSize: font_size ?? '18px' }}>
            <div className="icon d-flex align-items-center" style={{ width: size ?? '30px', height: size ?? '30px' }}>
                {icon}
            </div>
            {children}
            {!!icon2 && <div className="icon d-flex align-items-center" style={{ width: size ?? '30px', height: size ?? '30px' }}>
                {icon2}
            </div>}
        </div>
    );
};

export default IconLabel;