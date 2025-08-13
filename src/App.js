import React, { useState, useEffect } from 'react';

// Simple icon components (since CodeSandbox might have issues with lucide-react)
const SimpleIcon = ({ children, className = "w-5 h-5" }) => (
  <div className={`${className} flex items-center justify-center`}>{children}</div>
);

const SalesOutreachAgent = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [prospects, setProspects] = useState([]);
  const [linkedinQueue, setLinkedinQueue] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setProspects([
      { 
        id: 1, 
        name: 'Tech Corp', 
        contact: 'John Smith', 
        email: 'john@techcorp.com', 
        linkedinUrl: 'https://linkedin.com/in/johnsmith-tech', 
        status: 'new', 
        score: 85, 
        linkedinStatus: 'not_sent' 
      },
      { 
        id: 2, 
        name: 'Digital Solutions', 
        contact: 'Sarah Johnson', 
        email: 'sarah@digitalsol.com', 
        linkedinUrl: 'https://linkedin.com/in/sarah-johnson-digital', 
        status: 'contacted', 
        score: 72, 
        linkedinStatus: 'connected' 
      },
      { 
        id: 3, 
        name: 'Growth Industries', 
        contact: 'Mike Davis', 
        email: 'mike@growth.com', 
        linkedinUrl: 'https://linkedin.com/in/mikedavis-growth', 
        status: 'qualified', 
        score: 91, 
        linkedinStatus: 'message_sent' 
      }
    ]);
    
    setLinkedinQueue([
      { 
        id: 1, 
        prospectId: 1, 
        action: 'connect', 
        message: 'Hi John, I noticed your work at Tech Corp...', 
        scheduledTime: '2025-08-12T10:00', 
        status: 'pending' 
      },
      { 
        id: 2, 
        prospectId: 2, 
        action: 'message', 
        message: 'Thanks for connecting Sarah!', 
        scheduledTime: '2025-08-12T14:30', 
        status: 'scheduled' 
      }
    ]);
  }, []);

  const generateMessage = async (prospect, type) => {
    setIsProcessing(true);
    
    // Simulated AI response for demo
    const demoMessages = {
      email: `Hi ${prospect.contact},\n\nI noticed ${prospect.name} is doing innovative work in your industry. MarketSpire.ai helps companies like yours optimize marketing campaigns with AI-powered insights.\n\nWould you be open to a 15-minute conversation about how we could help ${prospect.name} increase ROI?\n\nBest regards,\n[Your Name]`,
      linkedin: `Hi ${prospect.contact}, I came across ${prospect.name} and was impressed by your approach to [industry]. I'd love to connect and share some insights about AI-powered marketing optimization. Best, [Your Name]`
    };
    
    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
    
    return demoMessages[type] || demoMessages.email;
  };

  const Dashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <SimpleIcon className="w-8 h-8 text-blue-500">👥</SimpleIcon>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Prospects</p>
              <p className="text-2xl font-bold text-gray-900">{prospects.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <SimpleIcon className="w-8 h-8 text-green-500">📧</SimpleIcon>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Emails Sent</p>
              <p className="text-2xl font-bold text-gray-900">245</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <SimpleIcon className="w-8 h-8 text-purple-500">💬</SimpleIcon>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Conversations</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <SimpleIcon className="w-8 h-8 text-orange-500">📈</SimpleIcon>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">12.3%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Prospects Pipeline</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">LinkedIn</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {prospects.map((prospect) => (
                <tr key={prospect.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{prospect.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{prospect.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      prospect.status === 'qualified' ? 'bg-green-100 text-green-800' :
                      prospect.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {prospect.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      prospect.linkedinStatus === 'connected' ? 'bg-green-100 text-green-800' :
                      prospect.linkedinStatus === 'message_sent' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {prospect.linkedinStatus.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{prospect.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const ProspectsTab = () => {
    const [csvData, setCsvData] = useState('');
    
    const handleCSVUpload = () => {
      const lines = csvData.split('\n').filter(line => line.trim());
      const newProspects = lines.slice(1).map((line, index) => {
        const values = line.split(',');
        return {
          id: prospects.length + index + 1,
          name: values[0]?.trim() || '',
          contact: values[1]?.trim() || '',
          email: values[2]?.trim() || '',
          linkedinUrl: values[3]?.trim() || '',
          status: 'new',
          linkedinStatus: 'not_sent',
          score: Math.floor(Math.random() * 40) + 60
        };
      });
      
      setProspects([...prospects, ...newProspects]);
      setCsvData('');
      alert(`Added ${newProspects.length} new prospects!`);
    };

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <SimpleIcon className="w-5 h-5 mr-2">💾</SimpleIcon>
            Prospect Import
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                CSV Data (Company, Contact, Email, LinkedIn URL)
              </label>
              <textarea
                value={csvData}
                onChange={(e) => setCsvData(e.target.value)}
                placeholder="TechCorp,John Smith,john@techcorp.com,https://linkedin.com/in/johnsmith"
                className="w-full p-2 border rounded h-32"
              />
            </div>
            <button 
              onClick={handleCSVUpload}
              disabled={!csvData.trim()}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
            >
              Import Prospects
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Prospect Analytics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>New Prospects:</span>
              <span className="font-medium">{prospects.filter(p => p.status === 'new').length}</span>
            </div>
            <div className="flex justify-between">
              <span>Contacted:</span>
              <span className="font-medium">{prospects.filter(p => p.status === 'contacted').length}</span>
            </div>
            <div className="flex justify-between">
              <span>Qualified:</span>
              <span className="font-medium">{prospects.filter(p => p.status === 'qualified').length}</span>
            </div>
            <div className="flex justify-between">
              <span>Average Score:</span>
              <span className="font-medium">
                {prospects.length > 0 ? Math.round(prospects.reduce((acc, p) => acc + p.score, 0) / prospects.length) : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AIToolsTab = () => {
    const [selectedProspect, setSelectedProspect] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');
    
    const handleGenerate = async (type) => {
      if (!selectedProspect) return;
      const prospect = prospects.find(p => p.id === parseInt(selectedProspect));
      const content = await generateMessage(prospect, type);
      setGeneratedContent(content);
    };

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <SimpleIcon className="w-5 h-5 mr-2">🤖</SimpleIcon>
            AI Message Generator
          </h3>
          <div className="space-y-4">
            <select 
              value={selectedProspect} 
              onChange={(e) => setSelectedProspect(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select prospect...</option>
              {prospects.map(prospect => (
                <option key={prospect.id} value={prospect.id}>
                  {prospect.name} - {prospect.contact}
                </option>
              ))}
            </select>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleGenerate('email')}
                disabled={!selectedProspect || isProcessing}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {isProcessing ? 'Generating...' : 'Generate Email'}
              </button>
              <button 
                onClick={() => handleGenerate('linkedin')}
                disabled={!selectedProspect || isProcessing}
                className="flex-1 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 disabled:opacity-50"
              >
                LinkedIn Message
              </button>
            </div>
            
            {generatedContent && (
              <div className="bg-gray-50 p-4 rounded border">
                <h4 className="font-medium mb-2">Generated Message:</h4>
                <div className="whitespace-pre-wrap text-sm mb-3">{generatedContent}</div>
                <button 
                  onClick={() => navigator.clipboard.writeText(generatedContent)}
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                >
                  Copy to Clipboard
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <SimpleIcon className="w-5 h-5 mr-2">⚙️</SimpleIcon>
            Configuration
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Company Description</label>
              <textarea 
                className="w-full p-2 border rounded h-20"
                defaultValue="MarketSpire.ai is an AI-powered marketing platform that helps businesses optimize their marketing campaigns, analyze customer data, and increase ROI through intelligent automation and insights."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Target Industries</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                defaultValue="SaaS, E-commerce, Digital Agencies, Tech Startups"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderActiveTab = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'prospects': return <ProspectsTab />;
      case 'tools': return <AIToolsTab />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <SimpleIcon className="w-8 h-8 text-blue-600 mr-3">🎯</SimpleIcon>
              <h1 className="text-2xl font-bold text-gray-900">MarketSpire.ai Sales Agent</h1>
            </div>
            <nav className="flex space-x-8">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: '📊' },
                { id: 'prospects', label: 'Prospects', icon: '👥' },
                { id: 'tools', label: 'AI Tools', icon: '🤖' }
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === id 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="mr-2">{icon}</span>
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default SalesOutreachAgent;
