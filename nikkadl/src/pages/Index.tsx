
import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Download, Mail, Twitter, Instagram, Loader2, CheckCircle } from 'lucide-react';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Memoized page change handler for better performance
  const handlePageChange = useCallback((page: string) => {
    setCurrentPage(page);
  }, []);

  // Optimized download handler
  const handleDownload = useCallback(async () => {
    if (!url.trim()) return;
    
    setIsLoading(true);
    setDownloadComplete(false);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setDownloadComplete(true);
    
    // Reset after 2.5 seconds
    setTimeout(() => {
      setDownloadComplete(false);
      setUrl('');
    }, 2500);
  }, [url]);

  // Optimized contact form handler
  const handleContactSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setEmail('');
    setMessage('');
    alert('Message sent successfully!');
  }, [email, message]);

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl animate-fade-in">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-4 tracking-tight">
            nikka<span className="text-blue-600">DL</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light leading-relaxed">
          Download any video instantly and effortlessly
        </p>
        
        <button
          onClick={() => handlePageChange('download')}
          className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
        >
          Get Started
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );

  const DownloadPage = () => (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            nikka<span className="text-blue-600">DL</span>
          </h2>
          <p className="text-slate-500">Paste your video URL below</p>
        </div>

        {/* Download Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-lg"
                disabled={isLoading}
              />
            </div>
            
            <button
              onClick={handleDownload}
              disabled={isLoading || !url.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : downloadComplete ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Download Complete!</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </>
              )}
            </button>
          </div>
          
          <p className="text-slate-400 text-sm text-center mt-6">
            Supports YouTube, TikTok, Instagram, and more
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 text-sm">
          <button
            onClick={() => handlePageChange('welcome')}
            className="text-slate-400 hover:text-slate-600 transition-colors duration-200 flex items-center gap-1"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => handlePageChange('contact')}
            className="text-slate-400 hover:text-slate-600 transition-colors duration-200 flex items-center gap-1"
          >
            Need Help? →
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h2>
          <p className="text-slate-500">We're here to help</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleContactSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
              required
            />
          </div>
          
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              rows={4}
              className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="p-3 bg-white rounded-xl border border-gray-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 transform hover:scale-110">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-white rounded-xl border border-gray-200 text-slate-400 hover:text-pink-600 hover:border-pink-200 transition-all duration-200 transform hover:scale-110">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:hello@nikkadl.com" className="p-3 bg-white rounded-xl border border-gray-200 text-slate-400 hover:text-green-600 hover:border-green-200 transition-all duration-200 transform hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 text-sm">
          <button
            onClick={() => handlePageChange('welcome')}
            className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => handlePageChange('download')}
            className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
          >
            Try Download →
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans antialiased">
      {currentPage === 'welcome' && <WelcomeScreen />}
      {currentPage === 'download' && <DownloadPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
};

export default Index;
