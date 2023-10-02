'use client'

import React from 'react';
import '../globals.css'
import DualPane from './dualPane';

function Header() {
    return (
        <header className='flex justify-center shadow-xl'>
            <h1 className='text-lg font-bold'>Transcript Highlighter</h1>
        </header>
    );
}

export default function ReactApp() {

    return (
    
        <main>
            <Header />
            <DualPane/>
        </main>
    );
}