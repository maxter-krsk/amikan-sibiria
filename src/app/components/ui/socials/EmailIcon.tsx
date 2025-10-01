type EmailIconProps = {
	className?: string;
}

export function EmailIcon ({className}: EmailIconProps) {
	return (
		<img src="/icons/ui/socials-icons/mail.svg"
		width={24}
		height={24}
		className={className}
		alt="Почта" />
	)
}