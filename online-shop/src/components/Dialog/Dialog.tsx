import * as D from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import css from "./Dialog.module.scss";

interface DialogProps {
    title: string;
    children: ReactNode;
    trigger: ReactNode;
}

const Dialog = ({ title, children, trigger }: DialogProps) => {

    return (
        <D.Root>
            <D.Trigger asChild>
                <div>
                    {trigger}
                </div>
            </D.Trigger>
            <D.Portal>
			<D.Overlay className={css["DialogOverlay"]}/>
			<D.Content className={css["DialogContent"]}>
				<D.Title className={css["DialogTitle"]}>{title}</D.Title>
				<D.Description className={css["DialogDescription"]}>
					Make changes to your profile here. Click save when you're done.
				</D.Description>
                    {children}
				<D.Close asChild>
					<button className={css["IconButton" ]}aria-label="Close">
                        X
					</button>
				</D.Close>
			</D.Content>
		</D.Portal>
	</D.Root>
    )
}

export default Dialog;