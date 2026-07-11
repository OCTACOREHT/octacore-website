const fs = require('fs');
const path = require('path');

const filesToFix = [
    'app/carriere/page.tsx',
    'app/not-found.tsx',
    'app/page.tsx',
    'components/footer.tsx'
];
const rootDir = 'c:/Users/kensl/websiteoctacoreht';

filesToFix.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;
        
        // Remplacer "bg-[#0030FF] text-foreground" par "bg-[#0030FF] text-white"
        content = content.replace(/bg-\[#0030FF\] text-foreground/g, 'bg-[#0030FF] text-white');

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed buttons in ${file}`);
        }
    }
});
console.log('Button fix complete.');
