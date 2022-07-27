export function getStatusUpdater(statusElement) {
    return (status) => { statusElement.innerHTML = `NeuroNet Status: ${status}` };
}

export function getResultUpdater(resultElement) {
    return (result) => { resultElement.prepend(result) };
}
