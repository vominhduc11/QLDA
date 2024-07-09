import { BeatLoader } from "react-spinners";

export default function LoadPage() {
    return (
        <div className="d-flex align-items-center justify-content-center position-fixed bg-white z-2" style={{ top: 0, bottom: 0, right: 0, left: 0 }}>
            <BeatLoader color="#dc3545" size={50} />
        </div>
    )
}
