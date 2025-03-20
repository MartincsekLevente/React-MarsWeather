import './MarsInfoItem.css';

interface MarsInfoItemProps {
    name: string
    value: string
}

export default function MarsInfoItem({name, value}: MarsInfoItemProps) {

    return (
        <div className="mars-info-item-container">{name} {value}</div>
    );
}