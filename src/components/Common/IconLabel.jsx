
const IconLabel = ({ icon, children }) => {
    return (
        <div className="icon-label d-flex align-items-center gap-2 py-1 rounded" style={{fontSize: '18px'}}>
            <div className="d-flex align-items-center" style={{ width: '30px', height: '30px' }}>
                {icon}
            </div>
            {children}
        </div>
    );
};

export default IconLabel;