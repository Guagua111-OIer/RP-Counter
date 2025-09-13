let rpCount = localStorage.getItem('rpCount') || 0;
document.getElementById('rpButton').textContent = rpCount;
function addRP() {
    rpCount++;
    localStorage.setItem('rpCount', rpCount);
    document.getElementById('rpButton').textContent = rpCount;
}
function resetRP() {
    if (!confirm('你确定要重置 RP 值吗？')) {
        return;
    }
    rpCount = 0;
    localStorage.setItem('rpCount', rpCount);
    document.getElementById('rpButton').textContent = rpCount;
}
