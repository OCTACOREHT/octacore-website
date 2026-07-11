const fs = require('fs');
const path = require('path');

const directoriesToSearch = ['app', 'components'];
const rootDir = 'c:/Users/kensl/websiteoctacoreht';

function replaceInFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Remove fixed dark backgrounds
    content = content.replace(/bg-\[#03011E\]/g, 'bg-background');
    content = content.replace(/bg-\[#0a0a2e\]/g, 'bg-background');
    content = content.replace(/bg-\[#050520\]/g, 'bg-background');
    
    // Replace text-white variations
    content = content.replace(/text-white\/(\d+)/g, 'text-foreground/$1');
    content = content.replace(/text-white(?![\w\-\/])/g, 'text-foreground');
    
    // Replace white borders/backgrounds (often used for glass effect)
    content = content.replace(/border-white\/(\d+)/g, 'border-foreground/10');
    content = content.replace(/bg-white\/(\d+)/g, 'bg-foreground/5');
    
    // Gradients from dark to darker -> light gradients or just neutral
    content = content.replace(/bg-gradient-to-b from-\[#0a0a2e\] (via-\[#050520\] )?to-\[#03011E\]/g, 'bg-gradient-to-b from-slate-50 to-white');
    content = content.replace(/bg-gradient-to-r from-\[#03011E\] to-\[#0a0a2e\]/g, 'bg-gradient-to-r from-white to-slate-50');

    // Remove text-white hover variants if any
    content = content.replace(/hover:text-white(?![\w\-\/])/g, 'hover:text-foreground');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            replaceInFile(fullPath);
        }
    }
}

directoriesToSearch.forEach(dir => {
    walkDir(path.join(rootDir, dir));
});
console.log("Replacement complete.");
