function updateTime() {
    var now = new Date();
    var timeStr = now.toLocaleTimeString('ru-RU');
    var dateStr = now.toLocaleDateString('ru-RU');

    document.getElementById('current-time').innerHTML = timeStr;
    document.getElementById('current-date').innerHTML = dateStr;
}

// ��������� ����� ������ �������
setInterval(updateTime, 1000);