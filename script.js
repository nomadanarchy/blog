// Nomad Anarchy Blog: theme choice only, no network requests.
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-btn');
    if (!button) return;

    function updateButton(theme) {
        var next = theme === 'dark' ? 'light' : 'dark';
        button.setAttribute('aria-label', 'switch to ' + next + ' mode');
        button.setAttribute('title', 'switch to ' + next + ' mode');
        if (theme === 'dark') {
            button.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="3"/><line x1="8" y1="1" x2="8" y2="3"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="1" y1="8" x2="3" y2="8"/><line x1="13" y1="8" x2="15" y2="8"/><line x1="2.9" y1="2.9" x2="4.3" y2="4.3"/><line x1="11.7" y1="11.7" x2="13.1" y2="13.1"/><line x1="2.9" y1="13.1" x2="4.3" y2="11.7"/><line x1="11.7" y1="4.3" x2="13.1" y2="2.9"/></svg>';
        } else {
            button.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M7.5 2.2A6 6 0 1 0 7.5 13.8A6 6 0 0 1 7.5 2.2z"/></svg>';
        }
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#f4f0e4');
        try { localStorage.setItem('theme', theme); } catch (e) {}
        updateButton(theme);
    }

    updateButton(document.documentElement.getAttribute('data-theme') || 'light');
    button.addEventListener('click', function () {
        var theme = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(theme === 'dark' ? 'light' : 'dark');
    });
});
