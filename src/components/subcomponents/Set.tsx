import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "set": {
                attributeName: string;
                to: string;
                begin: string;
            };
        }
    }
};

interface SetElementProps {
    attributeName: string;
    begin: string;
    to: string;
}

const SetElement: React.FC<SetElementProps> = ({ attributeName, begin, to }) => (
    <set attributeName={attributeName} begin={begin} to={to} />
);

export default SetElement;
