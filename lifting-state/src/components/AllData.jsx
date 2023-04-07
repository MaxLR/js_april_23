import DataDisplay from "./DataDisplay";

const AllData = ({ submittedData }) => {
	return (
		<div>
			<h3>User Data</h3>
			{submittedData.map((data) => {
				return (
					<div>
						<DataDisplay num={data.num} phrase={data.phrase} />
						<br />
					</div>
				);
			})}
		</div>
	);
};

export default AllData;