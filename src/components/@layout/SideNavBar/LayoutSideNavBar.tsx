import type {ReactNode} from "react";

import {cx} from "@utils/cx";

export function LayoutSideNavBar (): ReactNode {
	return (
		<div className={cx(
			'flex shrink-0 w-14 h-full flex-col',
			'bg-zinc-900',
			'border-r border-r-zinc-700'
		)}>
		
		</div>
	)
}