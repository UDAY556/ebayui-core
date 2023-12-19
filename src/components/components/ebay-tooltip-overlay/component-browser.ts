import type { AttrClass } from "marko/tags-html";
import type { pointerStyles, typeRoles } from "./constants";

interface TooltipOverlayInput {
    toJSON?: any;
    "style-top"?: string;
    "style-left"?: string;
    "style-right"?: string;
    "style-bottom"?: string;
    pointer?: keyof typeof pointerStyles;
    heading?: Marko.Input<"span"> & {
        as: Marko.NativeTags;
        renderBody: Marko.Body;
    };
    id?: string;
    type: keyof typeof typeRoles;
    content?: Marko.Input<"span">;
    "a11y-close-text"?: string;
    footer?: Marko.AttrTag<
        Marko.Renderable & {
            class?: AttrClass;
        }
    >;
    "on-overlay-close"?: (event: { originalEvent: Event }) => void;
}

export interface Input extends WithNormalizedProps<TooltipOverlayInput> {}

class TooltipOverlay extends Marko.Component<Input> {
    handleCloseButton(originalEvent: Event) {
        this.emit("overlay-close", { originalEvent });
    }
}

export default TooltipOverlay;
