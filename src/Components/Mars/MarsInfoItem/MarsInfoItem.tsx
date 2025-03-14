import './MarsInfoItem.css';

interface MarsInfoItemProps {
    name: string
}

export default function MarsInfoItem({name}: MarsInfoItemProps) {

    return (
        <div className="mars-info-item-container">{name}</div>
    );
}