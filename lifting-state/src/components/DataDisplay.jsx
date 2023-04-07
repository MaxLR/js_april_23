const DataDisplay = ({ phrase, num }) => {
    return (
        <div>
            <label htmlFor="">My Phrase is: {phrase}</label>
            <br />
            <label htmlFor="">My Number is: {num}</label>
        </div>
    )
}

export default DataDisplay;