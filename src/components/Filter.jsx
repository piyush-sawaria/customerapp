export default function Filter(props) {
    return <input 
                type="text" 
                onChange={(e) => props.filterEvent(e.target.value)}
                placeholder="search by name"
            />
}