export default function ListItem({ title, isFruit, id }) {
    return (
        <li
            key={id}
            style={{
                color: isFruit ? 'red' : 'darkgreen'
            }}
        >
            {title}
        </li>
    )
}