// Social sharing functions
function shareOnTwitter() {
    const url = window.location.href;
    const text = "Check out this article on prompt engineering: Unlocking the Power of AI — A Beginner’s Guide to Prompt Engineering That Actually Works #AI #PromptEngineering #TechTips";
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=520,height=570');
}

function shareOnWhatsApp() {
    const url = window.location.href;
    const text = "Check out this article on prompt engineering: Unlocking the Power of AI — A Beginner’s Guide to Prompt Engineering That Actually Works #AI #PromptEngineering #TechTips";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
}
