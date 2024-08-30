export const opacity: {
	initial: {
		opacity: number
	}
	open: {
		opacity: number
		transition: { duration: number }
	}
	closed: {
		opacity: number
		transition: { duration: number }
	}
}

export const height: {
	initial: {
		height: number | string
	}
	enter: {
		height: string
		transition: {
			duration: number
			ease: [number, number, number, number]
		}
	}
	exit: {
		height: number | string
		transition: {
			duration: number
			ease: [number, number, number, number]
		}
	}
}

export const background: {
	initial: {
		height: number | string
	}
	opened: {
		height: string
		transition: {
			duration: number
			ease: [number, number, number, number]
		}
	}
	close: {
		height: number | string
		transition: {
			duration: number
			ease: [number, number, number, number]
		}
	}
}

export const blur: {
	initial: {
		filter: string
		opacity: number
	}
	open: {
		filter: string
		opacity: number
		transition: { duration: number }
	}
	closed: {
		filter: string
		opacity: number
		transition: { duration: number }
	}
}

export const translate: {
	initial: {
		y: string
		opacity: number
	}
	enter: (i: number[]) => {
		y: number
		opacity: number
		transition: {
			duration: number
			ease: [number, number, number, number]
			delay: number
		}
	}
	exit: (i: number[]) => {
		y: string
		opacity: number
		transition: {
			duration: number
			ease: [number, number, number, number]
			delay: number
		}
	}
}
