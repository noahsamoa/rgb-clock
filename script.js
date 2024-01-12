// Function to set background color and update content
        function setBGColor() {
            let now = new Date();
            // Calculate elapsed time since midnight
            let elapsedMilliseconds = now.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0).getTime();
            // Calculate color index based on elapsed time
            let colorIndex = Math.floor(elapsedMilliseconds / (24 * 60 * 60 * 1000) * 16777215);
            // Generate hex color code
            let bgColor = `#${colorIndex.toString(16).padStart(6, '0')}`;
            
            // Apply background color to body
            document.body.style.backgroundColor = bgColor;
            // Update h1 content with color code
            document.querySelector('h1').textContent = bgColor.toUpperCase();
            // Set text color to inverted color for better visibility
            document.querySelector('h1').style.color = invertColor(bgColor);
            // Update favicon color
            setFaviconColor();
        }

        // Function to invert color
        function invertColor(hex) {
            // XOR operation to invert each RGB component
            return '#' + (0xFFFFFF ^ parseInt(hex.slice(1), 16)).toString(16).padStart(6, '0');
        }

        // Function to set favicon color dynamically
        function setFaviconColor() {
            let bgColor = document.body.style.backgroundColor;
            // Create a canvas to draw a filled square with the background color
            let canvas = document.createElement('canvas');
            canvas.width = canvas.height = 16;
            canvas.getContext('2d').fillStyle = bgColor;
            canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
            
            // Create a link element for the favicon and set its attributes
            let link = document.createElement('link');
            link.rel = 'shortcut icon';
            link.type = 'image/png';
            link.href = canvas.toDataURL();
            
            // Remove any existing link elements for the favicon and add the new one
            let existingLinks = document.head.querySelectorAll('link[rel="shortcut icon"]');
            for (let i = 0; i < existingLinks.length; i++) {
                document.head.removeChild(existingLinks[i]);
            }
            document.head.appendChild(link);
        }

        // Initial setup
        setBGColor();
        // Update background color every 1000ms (1 second)
        setInterval(setBGColor, 1000);