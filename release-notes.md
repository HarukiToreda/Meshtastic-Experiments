<!DOCTYPE html>
<html>
<head>
    <title>Meshtastic Firmware Release Notes</title>
</head>
<body>

<h1>Meshtastic Firmware Release Notes</h1>
<div id="release-notes">
    Loading release notes...
</div>

<script>
    const repoOwner = 'meshtastic';
    const repoName = 'firmware';
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/releases`;

    // Custom notes for each release
    const releaseNotesMap = {
        '2.5.6.ad8747d Alpha Pre-release': 'This release includes significant improvements to debug reporting and introduces new telemetry modules.',
        '2.5.5': 'Minor bug fixes and maintenance updates, including the removal of deprecated board variants.',
        '2.5.4': 'Improved firmware building process and added frequency options for new regions.',
        // Add more entries here for future releases as needed
    };

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const releaseNotes = document.getElementById('release-notes');
            releaseNotes.innerHTML = '';

            data.forEach(release => {
                const customNote = releaseNotesMap[release.tag_name] || 'No additional notes for this release.';
                const releaseDiv = document.createElement('div');
                releaseDiv.innerHTML = `
                    <h2>${release.name} (${release.tag_name})</h2>
                    <p><strong>Published at:</strong> ${new Date(release.published_at).toLocaleDateString()}</p>
                    <p>${release.body.replace(/\n/g, '<br>')}</p>
                    <p><strong>Custom Notes:</strong> ${customNote}</p>
                    <hr/>
                `;
                releaseNotes.appendChild(releaseDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching release notes:', error);
            document.getElementById('release-notes').innerHTML = 'Error loading release notes.';
        });
</script>

</body>
</html>
