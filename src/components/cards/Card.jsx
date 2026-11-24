const Card = ({
    text = "Title",
    icon = null,
    syncNumber = null,
    subSyncText = null,
}) => {
    return (
        <div className="border border-gray-300 w-58 rounded-md p-2">
            <div className="flex items-center justify-between p-1">
                <h3 className="font-medium">{text}</h3>

                {icon && <div className="icons">{icon}</div>}
            </div>

            <div className="flex flex-col p-1">
                {syncNumber !== null && (
                    <div className="font-bold px-2 text-2xl">{syncNumber}</div>
                )}

                {subSyncText && (
                    <p className="px-2 text-sm text-gray-500">{subSyncText}</p>
                )}
            </div>
        </div>
    );
};

export default Card;
