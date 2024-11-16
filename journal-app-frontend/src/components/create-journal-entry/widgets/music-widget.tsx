import Image from "next/image";

export default function CreateMusicWidget() {
	return (
		<div className="flex flex-row gap-3 rounded-3xl bg-white border-2 border-black w-1/3 h-16 p-3 shadow-box-shadow ">
			<Image
				src={"/svg/headphone.svg"}
				width={25}
				height={25}
				alt="headphones"
				className="m-1"
			></Image>
			<div>
				<p className="text-sm font-bold font-inter">Song Title</p>
				<p className="text-sm font-inter">Song Album and Artist</p>
			</div>
		</div>
	);
}
