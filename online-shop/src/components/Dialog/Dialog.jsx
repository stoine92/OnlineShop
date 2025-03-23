import * as D from "@radix-ui/react-dialog";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import styles from "./Dialog.module.scss";

const Dialog = ({ trigger, title, children }) => (
	<D.Root>
		<D.Trigger asChild>
			<div>
				{trigger}
			</div>
		</D.Trigger>
		<D.Portal>
			<D.Overlay className={styles.Overlay} />
			<D.Content className={styles.Content}>
				<D.Title className={styles.Title}>{title}</D.Title>
				<D.Description className={styles.Description}>
					{children}
				</D.Description>
				<D.Close asChild>
					<button className={styles.IconButton} aria-label="Close">
						<HighlightOffOutlinedIcon />
					</button>
				</D.Close>
			</D.Content>
		</D.Portal>
	</D.Root>
);

export default Dialog;
