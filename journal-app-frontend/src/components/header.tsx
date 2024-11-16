"use client";

import React, { useState } from "react";
import JournalEntryNew from "./create-journal-entry/journal-entry-tile";

interface NavbarState {
	activePage: string;
}
export default function Header() {
	const [state, setState] = useState<NavbarState>({
		activePage: "home",
	});

	const handlePageClick = (page: string) => {
		setState({ ...state, activePage: page });
	};

	return (
		<div className="grid grid-cols-4 bg-green py-4 border-b-2 border-black">
			<div className="col-span-3 justify-self-center ml-80 mt-2">
				<nav>
					<ul className="flex flex-row gap-28 tracking-wider font-light justify-self-center">
						<li className={state.activePage === "home" ? "font-bold" : ""}>
							<a href="/" onClick={() => handlePageClick("home")}>
								home
							</a>
						</li>
						<li className={state.activePage === "calendar" ? "font-bold" : ""}>
							<a href="/calendar" onClick={() => handlePageClick("calendar")}>
								calendar
							</a>
						</li>
						<li className={state.activePage === "settings" ? "font-bold" : ""}>
							<a href="/settings" onClick={() => handlePageClick("settings")}>
								settings
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="justify-self-end px-4">
				<JournalEntryNew />
			</div>
		</div>
	);
}
