import React from 'react';

const Dashboard = () => {
  return (
    <section className="bg-navy-gradient section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real-Time Hiring Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            AI-powered analytics • Comprehensive reporting • Real-time insights • Advanced AI & human intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Candidate Pipeline */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Candidate Pipeline</h3>
            <div className="space-y-4">
              <div className="bg-blue-600/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-300 text-sm">Active Searches</span>
                  <span className="text-white font-bold">12</span>
                </div>
                <div className="w-full bg-blue-900/30 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="bg-green-600/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-300 text-sm">Qualified Candidates</span>
                  <span className="text-white font-bold">48</span>
                </div>
                <div className="w-full bg-green-900/30 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-300 text-sm">Interviews Scheduled</span>
                  <span className="text-white font-bold">24</span>
                </div>
                <div className="w-full bg-purple-900/30 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Sourcing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Advanced Sourcing</h3>
            <div className="space-y-4">
              <div className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">AI Matching Score</span>
                  <span className="text-green-400 font-bold">94%</span>
                </div>
                <div className="text-xs text-gray-400">Based on skills, experience, location</div>
              </div>
              
              <div className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Response Rate</span>
                  <span className="text-blue-400 font-bold">67%</span>
                </div>
                <div className="text-xs text-gray-400">Email outreach performance</div>
              </div>
              
              <div className="border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Time to Fill</span>
                  <span className="text-yellow-400 font-bold">8 days</span>
                </div>
                <div className="text-xs text-gray-400">Average placement time</div>
              </div>
            </div>
          </div>

          {/* Engagement Insights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Engagement Insights</h3>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">156</div>
                  <div className="text-xs text-gray-400">Total Candidates Sourced</div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">89%</div>
                  <div className="text-xs text-gray-400">Candidate Quality Score</div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">24h</div>
                  <div className="text-xs text-gray-400">Average Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Real-Time Scoring */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Real-Time Scoring</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Technical Skills</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-white text-sm font-medium">90%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Experience Match</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-white text-sm font-medium">85%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Cultural Fit</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <span className="text-white text-sm font-medium">78%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Timeline Management */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Project Timeline Management</h3>
            <div className="space-y-4">
              <div className="bg-orange-600/20 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-orange-300 text-sm font-medium">Site Manager - CBD Project</span>
                  <span className="text-orange-400 text-xs">Urgent</span>
                </div>
                <div className="text-xs text-gray-400">Deadline: 3 days</div>
              </div>
              
              <div className="bg-blue-600/20 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-blue-300 text-sm font-medium">Electricians - Residential</span>
                  <span className="text-blue-400 text-xs">In Progress</span>
                </div>
                <div className="text-xs text-gray-400">Deadline: 1 week</div>
              </div>
              
              <div className="bg-green-600/20 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-green-300 text-sm font-medium">Carpenters - Commercial</span>
                  <span className="text-green-400 text-xs">On Track</span>
                </div>
                <div className="text-xs text-gray-400">Deadline: 2 weeks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;