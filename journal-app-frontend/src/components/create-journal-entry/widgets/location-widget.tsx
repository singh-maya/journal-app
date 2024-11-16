import Image from "next/image";

export default function CreateLocationWidget() {
	return (
		<div className="flex flex-row gap-3 rounded-3xl border-2 bg-white border-black w-1/3 h-16 p-4 shadow-box-shadow">
			<Image
				src={"/svg/location.svg"}
				width={25}
				height={25}
				alt="map"
				className="m-1"
			></Image>
			<p className="font-inter font-bold m-1">Location</p>
		</div>
	);
}
