
document.addEventListener('DOMContentLoaded', function () {
    // Shared Defaults for Dark Theme
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', 'Segoe UI', sans-serif";

    // 1. Doughnut Chart (Students by Major)
    const ctxStudent = document.getElementById('studentDoughnutChart').getContext('2d');
    new Chart(ctxStudent, {
        type: 'doughnut',
        data: {
            labels: ['Civil Eng.', 'Mechanical Eng.', 'IT', 'Electrical Eng.'],
            datasets: [{
                data: [1500, 1200, 1020, 800],
                backgroundColor: ['#06b6d4', '#8b5cf6', '#10b981', '#3b82f6'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { position: 'right', labels: { usePointStyle: true } }
            }
        }
    });

    // 2. Bar Chart (Library Books & Tutors by Department)
    const ctxLibraryTutor = document.getElementById('libraryTutorBarChart').getContext('2d');
    new Chart(ctxLibraryTutor, {
        type: 'bar',
        data: {
            labels: ['Civil', 'Mech', 'IT', 'Math', 'Science'],
            datasets: [
                {
                    label: 'Library PDF Books',
                    data: [300, 250, 400, 150, 140],
                    backgroundColor: '#06b6d4',
                    borderRadius: 4
                },
                {
                    label: 'Tutors',
                    data: [80, 75, 90, 40, 30],
                    backgroundColor: '#8b5cf6',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true } }
            },
            scales: {
                y: { grid: { color: '#334155', borderDash: [5, 5] }, beginAtZero: true },
                x: { grid: { display: false } }
            }
        }
    });
});
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}
