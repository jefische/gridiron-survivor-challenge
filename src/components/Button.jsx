export default function Button({classes, children}) {
    return (
        <>
            <div className="btn-container">
                <button className={classes}>{children}</button>
            </div>
        </>
    )
}