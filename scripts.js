document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const img = params.get("img");

    document.getElementById("service-name").innerText = name;
    document.getElementById("service-img").src = `images/${img}`;

    // Service Details
    const services = {
        "Poster Maker": {
            description: "Our professional poster design service ensures visually appealing and engaging posters tailored to your needs. Whether you're promoting an event, advertising a product, or making an announcement, a high-quality poster can grab attention and deliver your message effectively. We offer digital posters optimized for social media and print-ready formats for high-quality physical prints. Our designs focus on strong typography, vibrant color schemes, and a layout that communicates your ideas clearly.",
            suitableFor: ["Businesses", "Marketing Teams", "Event Planners", "Educational Institutions"],
            features: [
                "High-resolution, visually appealing designs",
                "Custom branding & color schemes to match your identity",
                "Multiple size options (A4, A3, Social Media formats, etc.)",
                "Print-ready formats (PDF, PNG, JPEG)",
                "Unlimited revisions (Premium plan)"
            ],
            pricing: [
                { plan: "Basic", price: "₹277", features: "1 poster, JPEG format, 1 revision" },
                { plan: "Standard", price: "₹553", features: "3 posters, JPEG + PNG, 3 revisions" },
                { plan: "Premium", price: "₹1,107", features: "5 posters, all formats, unlimited revisions" }
            ]
        },
        "Banner Maker": {
            description: "Our banner-making service provides high-quality, attention-grabbing designs that are perfect for online advertising, business promotions, and social media marketing. Whether you need a YouTube channel banner, a website header, or a printed banner for an event, we create designs that align with your brand's aesthetics. With custom dimensions and platform-specific optimization, we ensure your banners look stunning on every device and medium.",
            suitableFor: ["E-commerce Stores", "Retail Shops", "YouTube Creators", "Real Estate Agencies"],
            features: [
                "Custom banner sizes for websites, ads, and social media",
                "Optimized for Facebook, YouTube, Instagram, LinkedIn, and more",
                "High-quality PNG, JPEG, and PSD files",
                "Fast delivery with same-day service available",
                "Animated banners (Premium plan)"
            ],
            pricing: [
                { plan: "Basic", price: "₹415", features: "1 static banner, JPEG format" },
                { plan: "Standard", price: "₹830", features: "3 banners, multiple formats, 2 revisions" },
                { plan: "Premium", price: "₹1,660", features: "5 banners, all formats, animated banner included" }
            ]
        },
        "Web Design": {
            description: "Your website is the face of your business online, and we help you make a lasting impression. Our web design services focus on delivering fully responsive, aesthetically appealing, and user-friendly websites. Whether you need a simple business portfolio, an e-commerce store, or a fully custom web application, we ensure a seamless user experience. Our websites are SEO-optimized, mobile-friendly, and built using the latest industry standards to enhance speed and performance.",
            suitableFor: ["Startups", "Entrepreneurs", "E-commerce Stores", "Corporate Firms"],
            features: [
                "Modern, responsive web design",
                "SEO-optimized structure for better Google rankings",
                "Custom UI/UX design tailored to your brand",
                "E-commerce integration with payment gateways (Premium plan)",
                "API and database integration (Premium plan)"
            ],
            pricing: [
                { plan: "Basic", price: "₹5,533", features: "1-page website, responsive design" },
                { plan: "Standard", price: "₹13,833", features: "5-page website, contact form, SEO optimized" },
                { plan: "Premium", price: "₹27,667", features: "E-commerce, custom features, API integration" }
            ]
        },
        "Resume": {
            description: "A well-crafted resume can make the difference between getting noticed or overlooked. Our professional resume-building service ensures that your CV is polished, ATS-friendly, and visually appealing. Whether you're applying for a job, internship, or freelancing gig, our custom resume designs highlight your skills and experience effectively. We also offer cover letter writing and LinkedIn profile optimization to improve your online professional presence.",
            suitableFor: ["Job Seekers", "Students", "Freelancers", "Corporate Professionals"],
            features: [
                "Custom-designed, industry-specific layouts",
                "ATS-friendly formatting to pass recruiter filters",
                "Multiple formats (PDF, Word, PNG)",
                "Cover letter design (Standard & Premium plan)",
                "Unlimited revisions (Premium plan)"
            ],
            pricing: [
                { plan: "Basic", price: "₹277", features: "Single-page resume, PDF format" },
                { plan: "Standard", price: "₹692", features: "Multi-page resume, Word + PDF, 2 revisions" },
                { plan: "Premium", price: "₹1,107", features: "Cover letter, LinkedIn optimization, unlimited revisions" }
            ]
        },
        "Logo Maker": {
            description: "A unique logo is the identity of your brand. Our professional logo design service helps you create a strong brand presence with custom, high-quality logos that reflect your business values. Whether you need a minimalist logo, a modern abstract design, or a classic emblem, we offer multiple concepts and revisions to ensure your satisfaction.",
            suitableFor: ["Startups", "Businesses", "Personal Brands", "Freelancers"],
            features: [
                "Unique, custom-made logos tailored to your brand",
                "High-resolution formats (PNG, JPEG, SVG, AI)",
                "Multiple logo concepts to choose from",
                "Unlimited revisions (Premium plan)",
                "Full copyright ownership of the final design"
            ],
            pricing: [
                { plan: "Basic", price: "₹433", features: "1 logo, PNG format, 1 revision" },
                { plan: "Standard", price: "₹1,083", features: "3 logo variations, multiple formats, 3 revisions" },
                { plan: "Premium", price: "₹1,767", features: "5 logos, unlimited revisions, full branding kit" }
            ]
        },

       "Presentation": {
            description: "Our professional presentation design service transforms your ideas into visually engaging slides that leave a lasting impact. Whether it's for a business meeting, educational lecture, or investor pitch, we ensure clear, modern, and professional-looking slides that enhance your message.",
            suitableFor: ["Businesses", "Teachers", "Students", "Corporate Professionals"],
            features: [
                "Custom-designed slides with unique templates",
                "Animations & transitions for dynamic presentations",
                "Editable PowerPoint (PPT) & PDF formats",
                "Infographic & data visualization support",
                "Speech notes & presentation coaching (Premium plan)"
            ],
            pricing: [
                { plan: "Basic", price: "₹415", features: "5 slides, static design, PPT format" },
                { plan: "Standard", price: "₹830", features: "10 slides, animations, PDF + PPT" },
                { plan: "Premium", price: "₹1,383", features: "20 slides, custom branding, unlimited revisions" }
            ]
        },
        "Thumbnail Maker": {
            description: "Get high-converting YouTube thumbnails that grab attention and increase video clicks. Our thumbnails are custom-designed to match your brand identity and engage viewers effectively.",
            suitableFor: ["YouTube Creators", "Video Marketers", "Gaming Channels", "Educational Channels"],
            features: [
                "High-resolution 1280x720 YouTube-ready thumbnails",
                "Bold typography and color contrast for visibility",
                "Click-worthy designs with optimized CTAs",
                "PSD & PNG formats for future edits",
                "Express delivery available (Premium plan)"
            ],
            pricing: [
                { plan: "Basic", price: "₹138", features: "1 thumbnail, JPEG format" },
                { plan: "Standard", price: "₹332", features: "3 thumbnails, PNG format, 1 revision" },
                { plan: "Premium", price: "₹692", features: "5 thumbnails, PSD files, unlimited revisions" }
            ]
        },
        "Flyer": {
            description: "Promote your business, event, or offer with eye-catching flyers that effectively communicate your message. Our flyer designs are crafted for digital and print use, ensuring high-quality results across different platforms.",
            suitableFor: ["Businesses", "Event Organizers", "Real Estate Agents", "Retail Stores"],
            features: [
                "Custom-designed flyers in multiple sizes",
                "Print-ready formats (PDF, PNG, AI)",
                "Creative layouts with professional typography",
                "Both single & double-sided designs available",
                "Unlimited revisions (Premium plan)"
            ],
            pricing: [
                { plan: "Basic", price: "₹277", features: "1 flyer, JPEG format, 1 revision" },
                { plan: "Standard", price: "₹692", features: "3 flyers, multiple formats, 3 revisions" },
                { plan: "Premium", price: "₹1,383", features: "5 flyers, all formats, unlimited revisions" }
            ]
        }
    };

    // Set description, suitable for, and features
    if (services[name]) {
        const service = services[name];
        document.getElementById("service-description").innerText = service.description;

        // Suitable for
        const suitableForList = service.suitableFor.map(item => `<li>${item}</li>`).join('');
        document.getElementById("suitable-for").innerHTML = `<h3>Suitable For:</h3><ul>${suitableForList}</ul>`;

        // Features
        const featuresList = service.features.map(item => `<li>${item}</li>`).join('');
        document.getElementById("service-features").innerHTML = `<h3>Features:</h3><ul>${featuresList}</ul>`;
    } else {
        document.getElementById("service-description").innerText = "Contact us for more details.";
    }

   // Set Pricing Plans
const pricingContainer = document.getElementById("pricing-options");
if (pricingContainer && services[name] && services[name].pricing) {
    pricingContainer.innerHTML = services[name].pricing.map(plan => `
        <div class="pricing-card">
            <h3>${plan.plan}</h3>
            <p><strong>${plan.price}</strong></p>
            <p>${plan.features}</p>
            <button class="enquiry-btn" onclick="getEnquiry()">Get Enquiry</button>
        </div>
    `).join('');
} else {
    if (pricingContainer) {
        pricingContainer.innerHTML = `<p>Contact us for pricing.</p>`;
    }
}




   // Generate Recent Works Section
   const worksContainer = document.getElementById("recent-works");
   if (worksContainer) {
       worksContainer.innerHTML = ""; // Clear previous items
       for (let i = 1; i <= 5; i++) {
           let workItem = document.createElement("div");
           workItem.classList.add("work-item");

           let imgElement = document.createElement("img");
           imgElement.src = `images/${name ? name.toLowerCase().replace(" ", "-") : "default"}-work${i}.jpg`;
           imgElement.alt = `${name} Work`;

           let downloadBtn = document.createElement("a");
           downloadBtn.href = imgElement.src;
           downloadBtn.download = imgElement.src;
           downloadBtn.innerText = "Download";

           workItem.appendChild(imgElement);
           workItem.appendChild(downloadBtn);
           worksContainer.appendChild(workItem);
       }
   }
});


// Function to show enquiry alert
function getEnquiry() {
    alert("Please contact at +91 6280144157 to get enquiry. Thanks");
}
