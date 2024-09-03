import React from "react"

export const handleNumberKeyPress = (
	event: React.KeyboardEvent<HTMLInputElement>
) => {
	// Check if the key pressed is not a number (0-9) and not a control key (backspace, arrow keys, etc.)
	if (
		!/[0-9]/.test(event.key) &&
		event.key !== "Backspace" &&
		event.key !== "ArrowLeft" &&
		event.key !== "ArrowRight" &&
		event.key !== "Delete"
	) {
		event.preventDefault() // Prevent the default action for invalid keys
	}
}
