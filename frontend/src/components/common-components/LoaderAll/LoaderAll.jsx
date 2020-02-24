import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200",
                width: "100%"
            }}
        >
            <BounceLoader size={50} color={"#ff8000"} loading={true} />
        </div>
    );
};

export default Loader;