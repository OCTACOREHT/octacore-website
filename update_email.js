const fs = require('fs');
const path = require('path');

const filesToFix = [
    'app/carriere/page.tsx',
    'app/contact/page.tsx',
    'app/layout.tsx',
    'components/footer.tsx'
];
const rootDir = 'c:/Users/kensl/websiteoctacoreht';

filesToFix.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;
        
        // Remplacer l'email
        content = content.replace(/octacore\.haiti@gmail\.com/g, 'info@octacore.com');
        
        // Enlever le label "Email: " dans le rendu (footer et contact)
        // Par exemple remplacer {item.label}: {item.value} par {item.label === 'Email' ? '' : `${item.label}: `}{item.value}
        content = content.replace(/\{item\.label\}:\s*\{item\.value\}/g, "{item.label === 'Email' ? '' : `${item.label}: `}{item.value}");

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated email in ${file}`);
        }
    }
});
console.log('Email update complete.');
