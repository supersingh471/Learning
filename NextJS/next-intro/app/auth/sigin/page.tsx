/*"use client"

import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();

	useEffect(() => {
		axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
		.then(response => {
			setData(response.data); 
			setLoading(false);
		})
	},[]);

	if (loading) {
		return <div>
			loading...
		</div>
	}

	return (
		<div>
			User Page<br></br>
			{data.name}<br></br>
			{data.email}
		</div>
	)
}*/  //NOT A GOOD WAY TO FETCH BACKEND (CLIENT SIDE RENDERING)

import axios from "axios";

export default async function User() {
	const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")

	const data = response.data;
	console.log("request went out");
	return (
		<div>
			User Page<br></br>
			{data.name}<br></br>
			{data.email}
		</div>
	)
}