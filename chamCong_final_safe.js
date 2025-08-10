// == Tạm lược phần trên để giữ ngắn gọn, sẽ bao gồm attachChamCongEvents, handleChamCongFile, renderChamCongTable, validateChamCongData, renderChamCongErrorTable, openEditModal, etc. ==

// === Reset dữ liệu an toàn ===
function resetChamCongData() {
  if (confirm('Bạn có chắc chắn muốn xoá toàn bộ dữ liệu chấm công hiện tại không?')) {
    localStorage.removeItem('chamCongData')
    localStorage.removeItem('attendanceData')
    window.chamCongData = null
    window.updatedRows = new Set()
    window.visibleColumnIndices = null

    const labelTitle = document.getElementById('labelTitle')
    const labelDateRange = document.getElementById('labelDateRange')
    const scrollWrapper = document.getElementById('chamCongScrollWrapper')
    const errorWrapper = document.getElementById('chamCongErrorScrollWrapper')
    const filterSection = document.getElementById('columnFilterSection')
    const adjustmentWrapper = document.getElementById('adjustmentButtonWrapper')

    if (labelTitle) labelTitle.textContent = ''
    if (labelDateRange) labelDateRange.textContent = ''
    if (scrollWrapper) scrollWrapper.innerHTML = ''
    if (errorWrapper) errorWrapper.innerHTML = ''
    if (filterSection) filterSection.style.display = 'none'
    if (adjustmentWrapper) adjustmentWrapper.classList.add('hidden')
  }
}