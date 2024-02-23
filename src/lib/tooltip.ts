import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

export function tooltip(node: any, text: string) {
    const tooltip: any = tippy(node, makeOptions(text));

    return {
        update(text: string) {
            tooltip.setProps(makeOptions(text));
        },
        destroy() {
            tooltip.destroy();
        }
    };
}

function makeOptions(text: string) {
    return {
        content: text,
        theme: 'light-border',
        allowHTML: true,
    };
}
