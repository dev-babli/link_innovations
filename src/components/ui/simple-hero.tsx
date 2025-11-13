"use client";

import React from 'react';

const SimpleHero = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-green-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="block">Transform Your</span>
          <span className="block text-green-400">Digital Future</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Leading the way in AI-powered solutions, web development, and digital innovation
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
          <span className="bg-green-800 px-4 py-2 rounded-full">Web Development</span>
          <span className="bg-green-800 px-4 py-2 rounded-full">Mobile Apps</span>
          <span className="bg-green-800 px-4 py-2 rounded-full">AI Solutions</span>
          <span className="bg-green-800 px-4 py-2 rounded-full">Cloud & DevOps</span>
          <span className="bg-green-800 px-4 py-2 rounded-full">Data Analytics</span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;

