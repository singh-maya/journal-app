import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import JournalEntryInsert from "./journal-entry-content";

export default function JournalEntryNew() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="bg-yellow border-2 border-black shadow-box-shadow hover:bg-yellow hover:shadow-none"
				>
					<Image
						src={"/svg/add-new.svg"}
						alt="add-new"
						height={20}
						width={20}
					></Image>
					Add Entry
				</Button>
			</DialogTrigger>
			<JournalEntryInsert />
		</Dialog>
	);
}
