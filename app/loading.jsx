import Image from "next/image"

export default function Loading() {
    return (
        <div className="loading-screen" >
            <div className="loading-image-box" >
                <Image width={500} height={500} unoptimized src="/images/loading.gif" className="loading-image" alt="Loading Image" />
            </div>
      </div>
    )
}