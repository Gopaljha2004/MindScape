const blogs = [];
const blogTitles = [
    "10 Tips for Writing Engaging Blog Content",
    "The Ultimate Guide to Productivity for Writers",
    "How to Overcome Writer's Block and Stay Inspired",
    "Top 5 Tools Every Blogger Should Use",
    "The Art of Storytelling: Captivating Your Readers",
    "Mastering SEO for Your Blog in 2025",
    "Why Consistency is Key to Blogging Success",
    "How to Craft the Perfect Blog Post Title",
    "Exploring Minimalism: A Journey to Simplicity",
    "Boost Your Creativity with Daily Writing Exercises",
    "How to Monetize Your Blog in Easy Steps",
    "The Future of Blogging: Trends to Watch",
    "Content Planning: Stay Ahead with a Solid Strategy",
    "The Psychology Behind Viral Blog Posts",
    "From Draft to Publish: Perfecting Your Workflow",
    "Writing Hacks: Speed Up Your Blogging Process",
    "The Power of Personal Branding in Blogging",
    "How to Build a Loyal Audience for Your Blog",
    "Balancing Authenticity and Marketability in Blogging",
    "The Evolution of Blogging: From Hobby to Career"
  ];
  const blogImages = ["first" , "second" , "third" , "fourth" , "fifth" , "sixth" , "seventh" , "eight" , "nine" , "tenth" , "eleventh" , "tweleth" , "thirteen" , "fourteen" , "fiftheen" , "sixteen" , "seventeen" , "eighteen" , "nighteen"  ,"twenty"]

  const blogCategories = [ "Technology", "Lifestyle", "Business", "Travel", "Health", "Culture"];
 
  const contents = [
    "Explore the evolving landscape of artificial intelligence, including ethical AI and generative advancements. [4 min read]",
    "Master work-life harmony with proven strategies for time management and self-care. [3 min read]",
    "Dive into the world of remote work and discover the tools and techniques for success. [5 min read]",
    "Fuel your startup’s growth with innovative and actionable strategies for the modern entrepreneur. [4 min read]",
    "Plan your ultimate Icelandic adventure with must-see spots and hidden gems. [6 min read]",
    "Discover the art of living with less and how it can transform your life. [3 min read]",
    "Learn how meditation can improve your mental clarity and overall well-being. [4 min read]",
    "A beginner-friendly guide to understanding blockchain and its applications. [5 min read]",
    "Start your day right with these simple and effective morning habits. [3 min read]",
    "Stay ahead of the curve with the latest tech innovations. [5 min read]",
    "Practical advice for a safe and unforgettable solo travel experience. [4 min read]",
    "Simplify your journey to healthy eating with these practical tips. [3 min read]",
    "Explore the latest advancements in electric vehicle technology. [6 min read]",
    "Learn the key principles of budgeting, saving, and investing early. [5 min read]",
    "Discover the secrets to writing compelling blog content that captivates your audience. [4 min read]",
    "Unwind and recharge: the science-backed benefits of taking regular breaks. [3 min read]",
    "Navigate the digital detox trend and regain control of your screen time. [4 min read]",
    "Explore the hidden gems of urban cities for an offbeat travel experience. [5 min read]",
    "Get started with coding: beginner-friendly resources and tips. [4 min read]",
    "The ultimate guide to managing stress effectively in today’s fast-paced world. [3 min read]"
  ];
  const usernames = [
    "TechGuru99",
    "WanderLustSoul",
    "FitAndFocused",
    "EcoTraveler",
    "MindfulWriter",
    "CodeCrafter",
    "StartupSage",
    "HealthyHabitsPro",
    "UrbanExplorer",
    "FoodieNomad"
  ];
  
  const userImage = [""]

for(let i=0;i<=20;i++){
    let obj = {};
    obj.title = blogTitles[Math.floor(Math.random() *20)];
    obj["blog_image"] = blogImages[Math.floor(Math.random() *20)];
    obj["category"] =  blogCategories[Math.floor(Math.random()*6)];
    obj["blogs_content"] = contents[Math.floor(Math.random() *20)];
    obj["user_uploaded"] = usernames[Math.floor(Math.random() *10)];
    obj["blog_minute_read"] = Math.floor(Math.random() *5+1);
    obj["user_image"] =  userImage[Math.floor(Math.random() *10)];

    blogs.push(obj)
}

console.log(blogs)

const fs = require("fs");

const blogJsonData = JSON.stringify(blogs, null , 4)
fs.writeFileSync("arrayBlogData.json" , blogJsonData , "utf8" );
