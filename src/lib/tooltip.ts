import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

export function tooltip(node: any, content: string) {
    const tooltip: any = tippy(node, makeOptions(content));

    return {
        update(content: string) {
            tooltip.setProps(makeOptions(content));
        },
        destroy() {
            tooltip.destroy();
        }
    };
}

function makeOptions(content: string) {
    return {
        content,
        theme: 'light-border',
    };
}
