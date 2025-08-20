import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, RefreshCw, ExternalLink, AlertTriangle, Info, Clock, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface LinkCheck {
  url: string;
  status: number;
  referrers: string[];
  lastChecked: string;
  error?: string;
  suggestedRedirect?: string;
  similarity?: number;
}

interface CrawlResult {
  timestamp: string;
  totalChecked: number;
  errors404: LinkCheck[];
  errors5xx: LinkCheck[];
  orphanPages: LinkCheck[];
  allLinks: LinkCheck[];
}

const Admin404s = () => {
  const [searchParams] = useSearchParams();
  const [crawlData, setCrawlData] = useState<CrawlResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [crawling, setCrawling] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'404s' | '5xx' | 'orphans' | 'all'>('404s');
  
  // Simple authentication check
  const secretKey = searchParams.get('key');
  const isAuthenticated = secretKey === 'admin-404-report-2024';
  
  useEffect(() => {
    if (isAuthenticated) {
      loadCrawlData();
    }
  }, [isAuthenticated]);
  
  const loadCrawlData = async () => {
    try {
      // Try to load from public directory first (if exists)
      const response = await fetch('/admin/404-report.json');
      if (response.ok) {
        const data = await response.json();
        setCrawlData(data);
      }
    } catch (error) {
      console.error('Error loading crawl data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const runCrawl = async () => {
    setCrawling(true);
    try {
      const { data, error } = await supabase.functions.invoke('link-crawler');
      
      if (error) throw error;
      
      setCrawlData(data);
      
      // In a real implementation, you would save this to public/admin/404-report.json
      // For now, we'll just update the state
    } catch (error) {
      console.error('Crawl failed:', error);
      alert('Crawl failed. Check console for details.');
    } finally {
      setCrawling(false);
    }
  };
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Restricted</h1>
            <p className="text-gray-600 mb-4">
              This admin panel requires authentication. Please provide the correct key parameter.
            </p>
            <p className="text-sm text-gray-500">
              Usage: /admin/404s?key=YOUR_SECRET_KEY
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
          <p className="text-gray-600">Loading crawl data...</p>
        </div>
      </div>
    );
  }
  
  const filteredData = () => {
    if (!crawlData) return [];
    
    let data: LinkCheck[] = [];
    switch (activeTab) {
      case '404s':
        data = crawlData.errors404;
        break;
      case '5xx':
        data = crawlData.errors5xx;
        break;
      case 'orphans':
        data = crawlData.orphanPages;
        break;
      case 'all':
        data = crawlData.allLinks;
        break;
    }
    
    if (!searchTerm) return data;
    
    return data.filter(item => 
      item.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.referrers.some(ref => ref.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };
  
  const getStatusColor = (status: number) => {
    if (status === 200) return 'text-green-600 bg-green-100';
    if (status === 404) return 'text-red-600 bg-red-100';
    if (status >= 500) return 'text-purple-600 bg-purple-100';
    if (status >= 400) return 'text-orange-600 bg-orange-100';
    return 'text-gray-600 bg-gray-100';
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                Back to Site
              </Link>
              <div className="w-px h-6 bg-gray-300" />
              <h1 className="text-3xl font-bold text-gray-900">404 & Broken Links Report</h1>
            </div>
            <button
              onClick={runCrawl}
              disabled={crawling}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              <RefreshCw className={`h-5 w-5 ${crawling ? 'animate-spin' : ''}`} />
              {crawling ? 'Crawling...' : 'Re-run Crawl'}
            </button>
          </div>
          
          {crawlData && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{crawlData.totalChecked}</div>
                <div className="text-sm text-blue-800">Total Checked</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{crawlData.errors404.length}</div>
                <div className="text-sm text-red-800">404 Errors</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{crawlData.errors5xx.length}</div>
                <div className="text-sm text-purple-800">5xx Errors</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{crawlData.orphanPages.length}</div>
                <div className="text-sm text-orange-800">Orphan Pages</div>
              </div>
            </div>
          )}
          
          {crawlData && (
            <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Last crawl: {new Date(crawlData.timestamp).toLocaleString()}
            </div>
          )}
        </div>
        
        {crawlData && (
          <>
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: '404s', label: '404 Errors', count: crawlData.errors404.length },
                    { id: '5xx', label: '5xx Errors', count: crawlData.errors5xx.length },
                    { id: 'orphans', label: 'Orphan Pages', count: crawlData.orphanPages.length },
                    { id: 'all', label: 'All Links', count: crawlData.allLinks.length }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Search */}
              <div className="p-6">
                <div className="relative">
                  <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search URLs or referrers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Results Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        URL
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Suggested Redirect
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Referrers
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Checked
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData().map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 break-all"
                            >
                              {item.url}
                            </a>
                            <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          </div>
                          {item.error && (
                            <div className="text-xs text-red-600 mt-1">
                              Error: {item.error}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {(item as any).suggestedRedirect && (
                            <div>
                              <a
                                href={(item as any).suggestedRedirect}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 text-sm break-all"
                              >
                                {(item as any).suggestedRedirect}
                              </a>
                              <div className="text-xs text-gray-500">
                                {Math.round(((item as any).similarity || 0) * 100)}% match
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            {item.referrers.slice(0, 3).map((ref, refIndex) => (
                              <div key={refIndex} className="text-xs text-gray-600 break-all">
                                {ref}
                              </div>
                            ))}
                            {item.referrers.length > 3 && (
                              <div className="text-xs text-gray-500">
                                +{item.referrers.length - 3} more
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(item.lastChecked).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredData().length === 0 && (
                <div className="text-center py-12">
                  <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {searchTerm ? 'No results found for your search.' : 'No data available.'}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
        
        {!crawlData && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Crawl Data Available</h2>
            <p className="text-gray-600 mb-6">
              Run your first crawl to start monitoring broken links and 404 errors.
            </p>
            <button
              onClick={runCrawl}
              disabled={crawling}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 mx-auto"
            >
              <RefreshCw className={`h-5 w-5 ${crawling ? 'animate-spin' : ''}`} />
              {crawling ? 'Running First Crawl...' : 'Run First Crawl'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin404s;