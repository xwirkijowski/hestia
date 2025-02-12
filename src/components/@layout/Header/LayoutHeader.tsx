import type {ReactNode} from "react";

import {cx} from "@utils/cx";

export function LayoutHeader (): ReactNode {
	return (
		<div className={cx(
			'flex shrink-0 h-14',
			'bg-zinc-900',
			'border-b border-b-zinc-700'
		)}>
		
		</div>
	)
}