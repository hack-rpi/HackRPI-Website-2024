import React, { useMemo } from "react";
import Image from "next/image";

export interface ProjectDisplayProps {
    title: string;
    authors: string[];
    description: string;
    imageUrl?: string;
    imageOnLeft?: boolean;
    textRightAlign?: boolean;
    displayImage?: boolean; // new prop to control whether to display the image
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
    title,
    authors,
    description,
    imageUrl,
    imageOnLeft,
    textRightAlign,
    displayImage = true, // default value is true
}) => {
    const authorsList = useMemo(() => authors.join(", "), [authors]);

    return (
        <div className="text-white p-6 rounded-lg mb-8 flex flex-col md:flex-row">
            {displayImage && imageOnLeft && imageUrl && (
                <div className="flex-initial mr-4">
                    <Image
                        src={imageUrl}
                        alt={`Image for ${title}`}
                        width={400}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
            )}
            <div className={`flex-1 ${textRightAlign ? "text-right" : ""}`}>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div className="mb-4">
                    <strong>By:</strong> {authorsList}
                </div>
                <p className="text-gray-300">{description}</p>
            </div>
            {displayImage && !imageOnLeft && imageUrl && (
                <div className="flex-initial ml-4">
                    <Image
                        src={imageUrl}
                        alt={`Image for ${title}`}
                        width={400}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default React.memo(ProjectDisplay);