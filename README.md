# Third Cup Coffee Shop

A complete coffee shop website with database integration.

## 🚀 Quick Start

1. **Start XAMPP** - Make sure MySQL and Apache are running
2. **Run Setup** - Go to `http://localhost/RAPISTA/setup.php`
3. **Test Website** - Visit `http://localhost/RAPISTA/`

## 📁 Project Structure

```
RAPISTA/
├── 📄 HTML Pages
│   ├── index.html          # Homepage
│   ├── about.html          # About Us
│   ├── contact.html        # Contact Form
│   ├── menu.html           # Menu Display
│   ├── order.html          # Order Form
│   ├── membership.html     # Membership Form
│   └── orders.html         # Orders Display
├── 🎨 Styling
│   └── styles.css          # Main stylesheet
├── ⚡ JavaScript
│   ├── js/
│   │   └── api-client.js   # API communication
│   ├── script.js           # Main scripts
│   ├── contact-forms.js    # Contact form handling
│   ├── order-form.js       # Order form handling
│   ├── membership-form.js  # Membership form handling
│   ├── save-order.js       # Order saving
│   ├── orders-feed.js      # Orders display
│   └── load-orders.js      # Orders loading
├── 🔧 Backend
│   ├── config/
│   │   └── database.php    # Database connection
│   └── api/
│       ├── contact.php     # Contact form API
│       ├── orders.php      # Orders API
│       ├── members.php     # Membership API
│       └── newsletter.php  # Newsletter API
├── 🗄️ Database
│   └── database/           # SQL schema files
├── 🖼️ Images
│   └── images/             # Website images
├── 🚀 Setup
│   └── setup.php           # One-click setup script
└── 📖 Documentation
    └── README.md           # This file
```

## 🗄️ Database Tables

- **contact_submissions** - Contact form data
- **orders** - Customer orders
- **order_items** - Items in orders
- **members** - Membership data
- **newsletter_subscribers** - Newsletter signups
- **menu_items** - Coffee and pastry menu

## 🔧 Setup Instructions

1. **Start XAMPP Services**
   - Open XAMPP Control Panel
   - Start Apache
   - Start MySQL

2. **Run Setup Script**
   - Go to `http://localhost/RAPISTA/setup.php`
   - This will create database and tables automatically

3. **Test Your Website**
   - Visit `http://localhost/RAPISTA/`
   - Try submitting forms
   - Check if data appears in database

## 🌐 API Endpoints

- `POST /api/contact.php` - Submit contact form
- `POST /api/orders.php` - Create new order
- `POST /api/members.php` - Register membership
- `POST /api/newsletter.php` - Subscribe to newsletter

## 🐛 Troubleshooting

**If forms don't work:**
1. Check XAMPP - MySQL must be running
2. Run `setup.php` to verify database
3. Check browser console (F12) for errors
4. Verify API files exist in `api/` folder

**Common Issues:**
- MySQL not running in XAMPP
- Database tables not created
- JavaScript errors in browser console
- API files missing or corrupted

## 📱 Features

- ✅ Responsive design
- ✅ Contact form with database storage
- ✅ Order management system
- ✅ Membership registration
- ✅ Newsletter subscription
- ✅ Menu display
- ✅ Database integration
- ✅ API endpoints
- ✅ Fallback to localStorage

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** PHP 7.4+, PDO
- **Database:** MySQL 5.7+
- **Server:** Apache (XAMPP)
- **APIs:** RESTful JSON APIs

## 📞 Support

If you encounter issues:
1. Check XAMPP status
2. Run the setup script
3. Check browser console for errors
4. Verify all files are in correct locations

---

**Your coffee shop website is now clean, organized, and ready to use! ☕**

