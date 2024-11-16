import {
	DialogContent,
	DialogTitle,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "@/components/ui/input";
import CreateLocationWidget from "./widgets/location-widget";
import CreateMusicWidget from "./widgets/music-widget";

export default function JournalEntryInsert() {
	const currentDate = new Date();
	const formattedDate = new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(currentDate);

	return (
		<DialogContent
			aria-describedby={undefined}
			className="bg-pink border-black border-4 rounded-xl "
		>
			<VisuallyHidden asChild>
				<DialogTitle>Add New Journal Entry</DialogTitle>
			</VisuallyHidden>
			<div className="grid grid-cols-4">
				<div className="w-72 h-72 bg-white border-2 border-black "></div>
				<div className="col-span-3">
					<p className="font-inter font-medium text-slate-700">
						{formattedDate}
					</p>
					<Input
						placeholder="What happened today?"
						className="my-4 font-inter bg-black/5 border-black text-lg font-bold tracking-wide"
					/>
					<Input
						placeholder="Anything else?"
						className="my-4 font-inter bg-black/5 border-black text-base"
					/>
					<div className="flex flex-row gap-2">
						<CreateMusicWidget />
						<CreateLocationWidget />
					</div>
					<div className="flex flex-row gap-4 justify-end">
						<DialogClose asChild>
							<Button
								type="button"
								variant="ghost"
								className="bg-slate-200 border-2 border-black shadow-box-shadow font-bold"
							>
								Cancel
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button
								type="button"
								variant="ghost"
								className="bg-yellow border-2 border-black shadow-box-shadow font-bold"
							>
								Add Entry
							</Button>
						</DialogClose>
					</div>
				</div>
			</div>
		</DialogContent>
	);
}
