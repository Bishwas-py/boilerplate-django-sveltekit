export function useOutBlur(node: HTMLElement) {
    document.addEventListener('click', function (event: EventTarget | any) {
        if (node) {
            let isClickInsideElement = node.contains(event.target);
            if (!isClickInsideElement) {
                node.dispatchEvent(
                    new CustomEvent('outblur')
                );
            }
        }
    });
}
